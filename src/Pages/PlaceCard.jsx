import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ singlePlace }) => {
    return (
        <div>

            <Link to={`/place/${singlePlace.id}`} className="image-full ">


                <figure ><img className='shadow-2xl rounded' src={singlePlace.image} alt="Shoes" /></figure>
            </Link>
                <div className="card-body">
                    <h2 className="card-title text-gray-300">{singlePlace.name}</h2>
                </div>

        </div>
    );
};

export default PlaceCard;