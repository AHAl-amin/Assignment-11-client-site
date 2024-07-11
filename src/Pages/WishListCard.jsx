import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const WishListCard = ({ item, items, setItems }) => {
    // console.log(item)

    const { _id, image, title, category, shortdescription, wishListId, timestamp } = item;

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                    fetch(`https://assaignment-11-server-ruby.vercel.app/wishList/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Wish list Remove Successfully.",
                                    icon: "success"
                                });
                                const remaining = items.filter(itm => itm._id !== _id)
                                setItems(remaining);
                            }
                        })
                }
            });
    }

    function convertMillisecondsToDateTime(milliseconds) {
        // Create a new Date object using milliseconds
        var date = new Date(milliseconds);

        // Extract day, month, and year
        var day = date.getDate();
        var month = date.getMonth() + 1; // Months are zero-based, so add 1
        var year = date.getFullYear();

        // Extract hours, minutes, and seconds
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        // Determine AM/PM
        var period = hours < 12 ? 'AM' : 'PM';

        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // If hours is 0, set it to 12

        // Return the formatted date and time
        return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + period;
    }

    const time = convertMillisecondsToDateTime(timestamp)
    return (
        <div className='shadow-lg rounded-lg px-5 pb-5'>
            <figure><img className="h-[250px] w-full rounded-sm" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold mb-3">{title}</h2>
                <div className="space-y-3">


                    <p><span className="font-bold">Category : </span>{category}</p>
                    <p><span className='font-bold'>Posted time: </span>{time}</p>

                    <p>{shortdescription}</p>




                </div>
            </div>
            <div className='flex justify-end gap-3'>

                
                        <div className="card-actions justify-end">
                            <Link to={`/dettails/${wishListId}`}>
                                <button className="btn btn-primary">Dettails</button>
                            </Link>
                        </div>


                        <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 btn-primary">Remove WishList</button>
                        </div>

            </div>
        </div>
    );
};

export default WishListCard;