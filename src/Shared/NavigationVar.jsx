import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';


const NavigationVar = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)

    const logout=()=>{
        logOut()
    }
    return (
        <div className='flex px-10 '>
            <div className='flex-grow'>

                <img className='h-8 w-28 mt-5' src={logo} alt="" />
            </div>


            <div className='mt-5'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-black font-semibold me-5' : 'text-gray-200 font-semibold me-5'}>News</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-600 font-semibold me-5' : 'text-black font-semibold me-5'}>Destination</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-600 font-semibold me-5' : 'text-black font-semibold me-5'}>Blog</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-gray-600 font-semibold me-5' : 'text-black font-semibold me-5'}>Contact</NavLink>
          
          {
            user?    <button onClick={logout} className='px-4 p-1  rounded font-semibold btn-warning'>Logout</button> :
            <button className='px-4 p-1  rounded font-semibold btn-warning'><Link to='/login'>Login</Link></button>

          }
          

            </div>


        </div>
    );
};

export default NavigationVar;