import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';

const Place = () => {
    const [place, setPlace] = useState([])

    useEffect(() => {

        fetch('https://travel-goru-server-beta.vercel.app/place')
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])
    return (
        <div className='grid grid-cols-2 mt-10'>

            <div className='m-10'>
                <h1 className='text-6xl text-gray-200'>Discover the World Plan Your Next Adventure Today</h1>
                <p className='text-sm text-gray-300'>Destinations Highlight popular destinations, both domestic and international, that your website covers. You could mention specific cities, regions, or countries that travelers might be interested in exploring.
                Activities Consider highlighting specific activities that travelers can enjoy in these destinations, such as hiking, sightseeing, or cultural experiences. You could also mention popular tourist attractions, landmarks, or events.
                </p>
            </div>

            <div className='grid grid-cols-3 gap-10 m-10'>
                {
                    place.map(singlePlace => <PlaceCard singlePlace={singlePlace} key={singlePlace.id}></PlaceCard>)
                }


            </div>


        </div>
    );
};

export default Place;