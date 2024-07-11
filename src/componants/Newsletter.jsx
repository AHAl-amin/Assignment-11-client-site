import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const handleSubscribe = e =>  {
        e.preventDefault()
        const form = e.target;
            const email = form.email.value;
        if(email){
           toast.success('Thank you for subscribing to our newslette');
        }
     
     
    }

   
    return (
        <div className="my-10 shadow-xl p-5 rounded-xl">
            <h2 className="text-4xl font-bold text-center">News Latter</h2>
            <div className="w-full lg:w-1/2 mx-auto">
                <form  onSubmit={handleSubscribe} className="">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email</span>

                        </div>
                        <input type="email" name='email' placeholder="email" className="input input-bordered w-full " 
                            required />

                    </label>
                    <label className="form-control w-full ">

                   
                     <input className="input input-bordered w-full bg-gray-400 my-10" type="submit" value="Submit" />
                  
                      

                    </label>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Newsletter;