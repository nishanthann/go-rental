import React, { useState } from 'react'
import Title from '../../components/owner/Title';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AddCar = () => {


    const{axios,currency}=useAppContext();
    
    
    const[image,setImage]=useState(null);
    const [car, setCar] = useState({

            brand: "",
            model: "",
            year: 0,
            category: "",
            seating_capacity: 0,
            fuel_type: "",
            transmission: "",
            pricePerDay: 0,
            location: "",
            description: "",
            isAvailable: true,

            });
            
        const[isLoading,setIsLoading]=useState(false)
        const onSubmitHandler=async (e) => {
        e.preventDefault();
        if (isLoading) return null
        
        setIsLoading(true)
        try {
            const formData=new FormData()
            formData.append("image",image)
            formData.append("carData",JSON.stringify(car))




            // send data to db
            const{data}=await axios.post('/api/owner/add-car',formData)
            
            if(data.success){
                toast.success(data.message)
                setImage(null)
                setCar({
                    brand: "",
                    model: "",
                    year: 0,
                    category: "",
                    seating_capacity: 0,
                    fuel_type: "",
                    transmission: "",
                    pricePerDay: 0,
                    location: "",
                    description: "",
                    isAvailable: true,
                })
            }else{
                toast.error(data.message)
            }
        } catch (error) {
             toast.error(error.message)

        }finally{
            setIsLoading(false)
        }
    }


  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
        <Title title='Add New Vehicle' subtitle="Fill the  details to Post"/>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
            {/* car image */}
            <div className='flex items-center gap-2 w-full'>
                <label htmlFor="car-image">
                    <img className='h-14 rounded cursor-pointer' src={image? URL.createObjectURL(image): assets.upload_icon } alt="" />
                    <input type="file" id='car-image' accept='image/*' hidden onChange={(e)=>setImage(e.target.files[0])}/>
                </label>
                <p className='text-sm text-gray-500'>Upload a picture of your vehicle</p>
            </div>

            {/* car Brand and model */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col w-full' >
                    <label>Brand</label>
                    <input type="text" placeholder='BMV,TATA,Audi' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none ' value={car.brand} onChange={(e)=>setCar({...car,brand: e.target.value})}/>
                </div>

                <div className='flex flex-col w-full'>
                    <label>Model</label>
                    <input type="text" placeholder='model name' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none ' value={car.model} onChange={(e)=>setCar({...car,model: e.target.value})}/>
                </div>
                
             
            </div>

            {/* car year price, category */}

            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  '>
                {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Year</label>
                    <input type="number" placeholder='2025' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none ' value={car.year} onChange={(e)=>setCar({...car,year: e.target.value})}/>
                </div>
                 {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Daily price ({currency})</label>
                    <input type="number" placeholder='100' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none ' value={car.pricePerDay} onChange={(e)=>setCar({...car,pricePerDay: e.target.value})}/>
                </div>
                 {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Categoery </label>
                    <select  onChange={(e)=>setCar({...car,category:e.target.value})} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select a category</option>
                            <option value="car">Car</option>
                            <option value="suv">SUV</option>
                            <option value="van">Van</option>
                            <option value="tuktuk">Tuk Tuk</option>
                            <option value="jeep">Jeep (Sri Lanka)</option>
                            <option value="bus">Mini Bus</option>

                    </select>
                </div>
            </div>
            {/* Car Transmission,fueltype,seating */}
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  '>
                 {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Transmission</label>
                    <select  onChange={(e)=>setCar({...car,transmission:e.target.value})} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select a Transmission</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                            <option value="Semi-automatic">Semi-automatic</option>  
                    </select>
                </div>

                 {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Fuel type</label>
                    <select  onChange={(e)=>setCar({...car,fuel_type:e.target.value})} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select a fueltype</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Gas">Gas</option>  
                    </select>
                </div>
                 {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Seating Capacity</label>
                    <input type="number" placeholder='2' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none ' value={car.seating_capacity} onChange={(e)=>setCar({...car,seating_capacity: e.target.value})}/>
                </div>
            </div>

            {/* vehicle information */}
            <div className='flex flex-col w-full'>
                 {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Location</label>
                    <select  onChange={(e)=>setCar({...car,location:e.target.value})} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select the Location</option>
                            <option value="Colombo">Colombo</option>
                            <option value="Kandy">Kandy</option>
                            <option value="Galle">Galle</option>  
                    </select>
                </div>
            </div>
            {/* description */}
             {/* 1st div */}
                <div className='flex flex-col w-full'>
                    <label>Description</label>
                    <textarea rows={5} type="text" placeholder='Discribe your vehicle' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none ' value={car.description} onChange={(e)=>setCar({...car,description: e.target.value})}>
                    </textarea>
                </div>
                <button className="
                flex items-center justify-center gap-2 
                px-6 py-3 
                bg-gradient-to-r from-blue-600 to-blue-500 
                text-white font-medium 
                rounded-lg 
                shadow-md 
                hover:from-blue-700 hover:to-blue-600 
                hover:shadow-lg 
                active:scale-[0.98] 
                transition-all duration-200
                group
                ">
                <img 
                    src={assets.tick_icon} 
                    alt="checkmark" 
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                />
                {isLoading ? 'Listing..':'List Your Car'}
                </button>

        </form>
    </div>
  )
}

export default AddCar