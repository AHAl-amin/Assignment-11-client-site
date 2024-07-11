import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

import { motion } from 'framer-motion';

const RecentBlogCard = ({ recentblog }) => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const { _id, image, title, category, shortdescription, } = recentblog;

    const handleWishList = () => {
        const newdata = { wishListId: _id, image, title, category, shortdescription, email: user.email }
        console.log(newdata)
        fetch('https://assaignment-11-server-ruby.vercel.app/wishList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newdata)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'user Added wish List Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[250px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold mb-3">{title}</h2>
                <div className="space-y-3">


                    <p><span className="font-bold">Category : </span>{category}</p>

                    <p>{shortdescription}</p>



                </div>

                <div className="flex gap-4 justify-end mt-4">

                    <div className="App">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="card-actions justify-end">

                                <Link to={`/dettails/${_id}`}>
                                    <button
                                        className="btn btn-primary"> Details </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>



                    <div className="App">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="card-actions justify-end">

                                <button onClick={handleWishList}
                                    className="btn btn-primary"> wish List </button>


                            </div>
                        </motion.div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default RecentBlogCard;