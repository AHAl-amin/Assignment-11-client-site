import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const FeatureCard = ({blog,index}) => {
    const { _id, image, title, category, shortdescription,longdescription, userName, userPhoto } = blog;
    const {user} =useContext(AuthContext);
   console.log(longdescription);
    // const newData ={image, ,, title, category, shortdescription, }
  
    return (
        
              
              <tr className='border-2 border-blue-200'>
                            <th>
                              {index+1}
                            </th>
                            <td>
                                {title}
                            </td>
                            <td>
                                {userName}
                            </td>
                            <td>
                            <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={userPhoto} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                          
             </tr>
        
    );
};

export default FeatureCard;