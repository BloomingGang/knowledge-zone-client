import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClassOneInfo = () => {
    const { id} = useParams();
    const [classOneInfo,setClassOneInfo]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/classOne/${id}`).then(data=>setClassOneInfo(data.data))
    },[id])
    const {title,price,img}=classOneInfo;
    console.log(classOneInfo)
    return (
        <div>
            <h2>{title}</h2>
            <img src={img} alt="" />
            <h4>Price:{price}</h4>
        </div>
    );
};

export default ClassOneInfo;