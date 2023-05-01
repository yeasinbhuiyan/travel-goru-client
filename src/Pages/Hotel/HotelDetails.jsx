import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelCard from './HotelCard';
import { Map } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
const HotelDetails = () => {
    const hotels = useLoaderData()
    console.log(hotels)


    return (
        <div className='grid grid-cols-2 mx-auto'>

            <div>

                {
                    hotels.map(hotel => <HotelCard hotel={hotel} key={hotel._id}></HotelCard>)
                }
            </div>
            <div className='m-20'>
                <Map
                    provider={osm}
                    height={700}
                    defaultCenter={[50.879, 4.6997]}
                    defaultZoom={11}
                />

            </div>
        </div>
    );
};

export default HotelDetails;