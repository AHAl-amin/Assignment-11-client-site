
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
const ViewDettails = () => {

    const blog = useLoaderData();
    const {user} = useContext(AuthContext);

    const  { _id, image, title, category,  shortdescription,longdescription }=blog;
    return (
        <div className="hero min-h-screen  max-w-6xl mx-auto">
             <Helmet>
                <title>Blogs/Dettails</title>
            </Helmet>
            <div className="hero-content flex-col gap-6 lg:flex-row">
                <div className="flex-1">
                    <img src={image} className=" rounded-lg shadow-2xl" />
                </div>
                <div className="flex-1">
                   
                    <h1 className="text-2xl  md:text-4xl font-bold">{title}</h1>

                  
                    <div className="space-y-3">
                        <p className="font-bold text-2xl my-5"><span className="font-bold"> Category : </span>{category} </p>

                        <p>{shortdescription}</p>

                        <p>{longdescription}</p>

                        

                       

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ViewDettails;