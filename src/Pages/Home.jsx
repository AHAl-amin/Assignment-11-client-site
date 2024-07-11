import React from 'react';
import Banner from '../componants/Banner';

import Newsletter from '../componants/Newsletter';
import RecentBlogCard from '../componants/RecentBlogCard';
import { useLoaderData } from 'react-router-dom';
import Contact from '../componants/Contact';
import AboutUs from '../componants/AboutUs';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    const recentblogs = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Blogs/Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div>
                <h1 className="text-4xl font-bold text-orange-300 text-center mt-10"> Recent Blog Posts   </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">

                    {
                        recentblogs.map(recentblog => <RecentBlogCard key={recentblog._id} recentblog={recentblog}></RecentBlogCard>)
                    }
                </div>
            </div>
            <Newsletter></Newsletter>
            <Contact></Contact>
        </div>
    );
};

export default Home;