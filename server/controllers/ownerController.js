import imagekit from '../configs/imageKit.js';
import Booking from '../models/Booking.js';
import Car from '../models/Car.js';
import User from '../models/User.js';
import fs from "fs";


// api to change role of the user

export const changeRoleToOwner =async (req,res) => {
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id,{role:"owner"})
        res.json({success:true, message:"Now you can list your car"})
    } catch (error) {
         console.log(error.message);
        res.json({success:false,message:error.message})  
    }
}

// API TO list car
export const addCar =async (req,res) => {
    try {
        const{_id}=req.user;
        let car =JSON.parse(req.body.carData);
        const imageFile =req.file;

        // upload image to image kit
        const fileBuffer =fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName: imageFile.originalname,
            folder:'/cars'
        })
        // For URL Generation, works for both images and videos
        var optimizedImageUrl = imagekit.url({
            path : response.filePath,
            
            transformation : [
                {format: "webp"},
                {width : "1280"},
                {quality:'auto'}
                ]
                });
            const image= optimizedImageUrl;
            
            // upload to mongodb
            await Car.create({...car,owner:_id,image})

             res.json({success:true, message:"car added"})

                } catch (error) {
                    console.log(error.message);
                    res.json({success:false,message:error.message})  
                }
}

// API TO LIST OWNER CARS
export const getOwnerCar =async (req,res) => {
    try {
        
        const{_id}=req.user;
        const cars =await Car.find({owner:_id})
        res.json({success:true, cars})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})  

    }    
}

// api to togglr car availablity
export const toggleCarAvailability =async (req,res) => {
    try {
        
        const{_id}=req.user;
        const{carId}=req.body;
        const car =await Car.findById(carId)
        // check car belongs to the user
        if (car.owner.toString() !==_id.toString()) {
            return res.json({success:false,message:"unauthorized"})
        }
        car.isAvailable=!car.isAvailable
        await car.save()

        res.json({success:true, message:"availability toogled"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})  

    }     
}

// api to delete car availablity
export const deleteCar =async (req,res) => {
    try {
        const{_id}=req.user;
        const{carId}=req.body;
        const car =await Car.findById(carId)
        // check car belongs to the user
        if (car.owner.toString() !==_id.toString()) {
            return res.json({success:false,message:"unauthorized"})
        }
        car.owner=null;
        car.isAvailable=false;
        await car.save()

        res.json({success:true, message:"car removed"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})  

    }     
}

// api to dashboard data
export const getDashboardData =async (req,res) => {
    try {
        const{_id,role}=req.user;

        if (role !== "owner") {
            return res.json({success:false,message:"unauthorized"})
        }
 
        const cars=await Car.find({owner:_id})
        
        
        const bookings= await Booking.find({owner:_id}).populate('car').sort({createdAt:-1})
       
        const pendingBookings = await Booking.find({owner:_id,status:"Pending"})
        const completedBookings = await Booking.find({owner:_id,status:"Confirmed"})

        // calculate monthly revenue
        const monthlyRevenue =bookings.slice().filter(booking=>booking.status === 'confirmed').reduce((acc,booking)=>acc+booking.price,0)

        const dashboardData={
            totalCars:cars.length,
            totalBookings:bookings.length,
            pendingBookings:pendingBookings.length,
            completedBookings:completedBookings.length,
            recentBookings:bookings.slice(0,3),
            monthlyRevenue
        }
        res.json({success:true, dashboardData});

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})  

    }     
}

// api to update user image
export const updateUserImage=async (req,res) => {
    try {
         const{_id}=req.user;
        const imageFile =req.file;

        // upload image to image kit
        const fileBuffer =fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName: imageFile.originalname,
            folder:'/users'
        })
        // For URL Generation, works for both images and videos
        var optimizedImageUrl = imagekit.url({
            path : response.filePath,
            
            transformation : [
               { format: "webp"},
                {width : "400"},
                {quality:'auto'}
            ]
            });
            const image= optimizedImageUrl;
         
            await User.findByIdAndUpdate(_id,{image});
            res.json({success:true, message:"image updated"})


    } catch (error) {
        
        console.log(error.message);
        res.json({success:false,message:error.message}) 
    }
}

