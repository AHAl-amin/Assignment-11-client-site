import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AllBlog from "../Pages/AllBlog";
import AddBlog from "../Pages/AddBlog";
import FeaturedBlog from './../Pages/FeaturedBlog';
import WishList from './../Pages/Wishlist';
import Error from "../Pages/Error";

import ViewDettails from './../componants/ViewDettails';
import PrivetRout from '../componants/PrivetRout';






const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('https://assaignment-11-server-ruby.vercel.app/blog')
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/allblog',
                element:<AllBlog></AllBlog>,
               
            },
            {
                path:'/addblog',
                element:<AddBlog></AddBlog>
            },
           
            {
                path:'/featuredblog',
                element:<FeaturedBlog></FeaturedBlog>,
                loader:() =>fetch('https://assaignment-11-server-ruby.vercel.app/feature'),
            }, 
            {
                path:'/wishlist',
                element:<WishList></WishList>

            },
            {
                path:'/dettails/:id',
                element:<PrivetRout>

                    <ViewDettails></ViewDettails>
                </PrivetRout> ,
                loader:({params}) =>fetch(`https://assaignment-11-server-ruby.vercel.app/blog/${params.id}`)
            },
           
        ]
    }
])

export default router;