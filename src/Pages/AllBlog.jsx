// import {  useLoaderData } from "react-router-dom";
import axios from 'axios';
import BlogCard from './BlogCard';
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';


const AllBlog = () => {
    // const blogs = useLoaderData();
    const [blogs, setBlog] = useState([]);
    console.log(blogs);
    const [serach, setSearch] = useState('');


    useEffect(() => {
        axios.get(`https://assaignment-11-server-ruby.vercel.app/blog?search=${serach}`)
            .then(response => {
                console.log(response.data);
                setBlog(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [serach])

    const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.search.value;
        console.log(searchText);
        setSearch(searchText)
    }


    return (
        <div>
             <Helmet>
                <title>Blogs/All Blog</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-orange-300 text-center mt-10">All Blog </h1>
            <div className='flex gap-6 my-4 items-center'>
                <form className='bg-orange-300 w-[300px] text-center p-2 rounded-xl' onSubmit={handleSearch} >
                    <div className=''>
                        <input type="text" name="search" className='h-12 mr-2 rounded-lg text-left p-2' placeholder="search here" />
                        <input type="submit" value="search" className="btn" />
                    </div>
                </form>


              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">



                {
                    blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }

            </div>
        </div>
    );
};

export default AllBlog;