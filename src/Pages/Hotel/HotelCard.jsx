import React from 'react';
// import Rating from 'react-rating';
// import { FaBeer, FaRegStar, FaStar } from 'react-icons/fa';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const HotelCard = ({ hotel }) => {
    const { title, guests,price, image_url, place_id, rating, bedrooms, bath } = hotel


    return (
        <div className='m-20'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-full' src={image_url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sm">{title}</h2>
                    <ul className='flex  decoration-0 gap-5 text-sm'>
                        <li>{guests}Guests</li>
                        <li>{bedrooms}Bedrooms</li>
                        <li>{bath}Bath</li>
                    </ul>
                    <p>Price: <span className='text-bold'>${price}</span></p>
                    <p className='font-semibold flex'>
                        {/* <Rating
                            className='text-warning'
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        /> */}
                        <Rating style={{ maxWidth: 100 }} value={Math.round(rating||0)} readOnly/>

                        {rating}

                    </p>



                </div>
            </div>



        </div>
    );
};

export default HotelCard;