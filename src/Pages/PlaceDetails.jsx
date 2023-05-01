import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import {RangeDatePicker} from "react-google-flight-datepicker";
//   import "react-google-flight-datepicker/dist/main.css";

const PlaceDetails = () => {
    const placeDetails = useLoaderData()
    console.log(placeDetails)
    const { id, name, details, origin, destination } = placeDetails
    console.log('ashenai')
    return (
        <div className='grid grid-cols-2 mt-10'>



            <div className='m-10'>
                <h1 className='text-6xl text-gray-100 my-5'>{name}</h1>
                <p className='text-gray-200'>{details}</p>

            </div>
            <div className='mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <label className="label">
                            <span className="label-text font-semibold">Origin</span>


                        </label>
                        <h4 className='bg-slate-300 p-2 rounded'>{origin}</h4>
                        <label className="label">
                            <span className="label-text font-semibold">Destination</span>
                        </label>
                        <h4 className='bg-slate-300 p-2 rounded'>{destination}</h4>

                        <div className='flex justify-center my-5'>
                           
                      
                              
                                <RangeDatePicker
                                
                                    startDate={new Date(2020, 0, 15)}
                                    
                                    endDate={new Date(2020, 1, 1)}
                                />
                           
                        </div>


                 <Link to={`/hotelDetails/${id}`}><button className='btn w-full btn-warning'>Start Booking</button></Link>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default PlaceDetails;