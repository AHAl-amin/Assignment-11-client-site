import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import WishListCard from "./WishListCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";




const wishList = () => {
    const { user } = useContext(AuthContext) || {};
    const [items, setItems] = useState([])
   console.log(items);

    // const loadedSpots = useLoaderData();
    // const [spots, setSpots] = useState(loadedSpots);


    const handleSorting = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'Descending') {
            const data = [...items].sort((p1, p2) => {
                if (p1.timestamp < p2.timestamp) return 1;
                if (p1.timestamp > p2.timestamp) return -1;
                return 0;
            })
            console.log(data)
            setItems(data)
        }
        else if (e.target.value === 'Ascending') {
            const data2 = [...items].sort((p1, p2) => {
                if (p1.timestamp < p2.timestamp) return -1;
                if (p1.timestamp > p2.timestamp) return 1;
                return 0;
            })
            console.log(data2)
            setItems(data2)
        }
    }



    // useEffect(() => {
    //     fetch(`https://assaignment-11-server-ruby.vercel.app/wishList/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setItems(data)
    //         })
    // }, [user]);

    const {data} = useQuery({
        queryFn: async () => {
            const tanStackValue = await axios.get(`https://assaignment-11-server-ruby.vercel.app/wishList/${user?.email}`);
            console.log(tanStackValue);
            setItems(tanStackValue.data)
            return tanStackValue.data;
        },
        querykey:['ture'],
        onabled: [user?.email]

    })



    return (
        <div>
            <Helmet>
                <title>Blogs/Wish list</title>
            </Helmet>
            <h1 className="text-center mt-3 text-4xl font-bold">Wish List </h1>

            <div className="text-center my-4 ">

                <select onChange={handleSorting} name='countryName' className="select select-bordered bg-green-300">
                    <option disabled selected>Sort by</option>
                    <option >Ascending</option>
                    <option >Descending</option>



                </select>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 ">
                {
                    items.map(item => <WishListCard key={item._id} item={item} items={items} setItems={setItems}></WishListCard>)
                }
            </div>

        </div>
    );
};

export default wishList;