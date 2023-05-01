import React from 'react';
import NavigationVar from '../Shared/NavigationVar';
import { Outlet } from 'react-router-dom';

const HotelLayout = () => {
    return (
        <div>
            <NavigationVar></NavigationVar>
          <div className='px-10 mt-3'>
          <hr />
          </div>
            <Outlet></Outlet>

        </div>
    );
};

export default HotelLayout;