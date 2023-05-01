import React from 'react';
import NavigationVar from '../Shared/NavigationVar';
import { Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div className='home-container'>


                <NavigationVar></NavigationVar>
            
            <Outlet></Outlet>

        </div>
    );
};

export default Main;