import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Place from "../Pages/Place";
import PlaceDetails from "../Pages/PlaceDetails";
import HotelLayout from "../Layout/HotelLayout";
import HotelDetails from "../Pages/Hotel/HotelDetails";
import Login from "../Shared/LoginAndRegister/Login";
import Register from "../Shared/LoginAndRegister/Register";
import PrivateRouter from "./PrivateRouter";
import LoginLayout from "../Layout/LoginLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/place/place'></Navigate>
            },

            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]


    },


    {
        path: 'place',
        element: <Main></Main>,
        children: [
            {
                path: 'place',
                element: <Place></Place>,


            },
            {
                path: ':id',
                element: <PlaceDetails></PlaceDetails>,
                loader: ({ params }) => fetch(`https://travel-goru-server-beta.vercel.app/placeDetails/${params.id}`)
            }

        ]
    },


    {
        path: 'hotelDetails',
        element: <PrivateRouter><HotelLayout></HotelLayout></PrivateRouter>,
        children: [

            {
                path: ':id',
                element: <HotelDetails></HotelDetails>,
                loader: ({ params }) => fetch(`https://travel-goru-server-beta.vercel.app/hotelDetails/${params.id}`)

            }

        ]

    }
])


export default router