import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const AddBlog = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.photoURL);
    console.log(user?.displayName);

    const handleAddblog = e => {
        e.preventDefault();
        const form = e.target;
        
        const email = user?.email;
        const userName = user?.displayName;
        const userPhoto = user?.photoURL;
        const title = form.title.value;
        const category = form.category.value;
        const shortdescription = form.shortdescription.value;
        const longdescription = form.longdescription.value;
        const image = form.image.value;


        const userBlog = {email, image, title, category,  shortdescription, longdescription, userName,userPhoto, }
        console.log(userBlog)

       


        // send data to the server
        fetch('https://assaignment-11-server-ruby.vercel.app/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userBlog)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'user Added Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

  
    return (
        <div>
            <Helmet>
                <title>Blogs/Add Blog</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">

                <div className="bg-green-400 rounded-lg p-4 my-8">
                    <h2 className="text-4xl text-center font-bold my-4">
                        Add Blog
                    </h2>
                    <form onSubmit={handleAddblog} className=" p-2">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">	User Name</span>

                                </div>
                                <input type="text" name='name' placeholder=" User Name" defaultValue={user?.displayName} className="input input-bordered w-full " disabled required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Email</span>

                                </div>
                                <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered w-full " disabled
                                    required />

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Blog Title </span>

                                </div>
                                <input type="text" name='title' placeholder="title" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Category</span>

                                </div>
                                {/* <input type="text" name='countryName' placeholder="country name" className="input input-bordered w-full "
                        required /> */}
                                <select name='category' className="select select-bordered w-full ">
                                    <option disabled selected>Category of Blog</option>
                                    <option value='Travel Blogs'>Travel Blogs</option>
                                    <option value='Food and Cooking Blogs'>Food and Cooking Blogs</option>
                                    <option value='Fitness and Health Blogs'>Fitness and Health Blogs</option>



                                    <option value='Photography Blogs'>Photography Blogs</option>
                                    <option value='Book and Literature Blogs'>Book and Literature Blogs</option>
                                    <option value='Sports Blogs'>Sports Blogs</option>

                                </select>


                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Short Description</span>

                                </div>
                                <input type="text" name='shortdescription' placeholder="short description" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Long description</span>

                                </div>
                                <input type="text"
                                    name='longdescription' placeholder="long description" className="input input-bordered w-full "
                                    required />


                            </label>









                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Image URL</span>

                                </div>
                                <input type="text" name='image' placeholder=" image URL" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">

                                <input className="input input-bordered w-full bg-gray-400 my-10" type="submit" value="Submit" />

                            </label>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddBlog;