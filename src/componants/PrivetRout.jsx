// import React from 'react';

// const PrivetRout = () => {
//     return (
//         <div>
//             <h2>this is privet</h2>
//         </div>
//     );
// };

// export default PrivetRout;

import { useContext } from "react";

import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { AuthContext } from "../Providers/AuthProvider";


const PrivetRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
        
   
};

export default PrivetRout;

PrivetRout.propTypes ={
    children:PropTypes.node
 }