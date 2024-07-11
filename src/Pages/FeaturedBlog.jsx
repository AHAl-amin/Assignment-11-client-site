import { useLoaderData } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const FeaturedBlog = () => {
 
    const blogs = useLoaderData();
  
    const [lognDescription, setLongDescription] = useState([]);
    console.log(blogs);
    useEffect(()=>{
          
        const result =blogs.sort((a, b) => b.longdescription.length - a.longdescription.length)
        setLongDescription(result)
    },[])
    return (
        <div className="my-10">
             <Helmet>
                <title>Blogs/Feature blog</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center mb-5"> Feature Blogs </h1>
            <div className="overflow-x-auto">
                <table className="table  border-2 border-gray-600 rounded-xl">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            Serial Number
                            </th>
                            <th>Title</th>
                            <th>  Owner Name</th>
                            <th> Owner Profile</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                      
                     {
                        lognDescription.slice(0, 10).map((blog,index) => <FeatureCard key={blog._id} blog={blog} index={index}></FeatureCard> )
                     }
                    </tbody>
                    {/* foot */}
               

                </table>
            </div>
        </div>
    );
};

export default FeaturedBlog;