import { Link } from "react-router-dom";



const RecentBlogPosts = () => {

   
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[250px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold mb-3">{title}</h2>
                <div className="space-y-3">
                    

                    <p><span className="font-bold">Category : </span>{category}</p>

                    <p>{shortdescription}</p>

                  

                </div>

            
            </div>
        </div>
    );
};

export default RecentBlogPosts;