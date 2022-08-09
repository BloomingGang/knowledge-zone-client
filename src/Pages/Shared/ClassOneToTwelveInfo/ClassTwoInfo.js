import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClassTwoInfo = () => {


    
    const { id} = useParams();
    const [classTwoInfo,setClassTwoInfo]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/classTwo/${id}`).then(data=>setClassTwoInfo(data.data))
    },[id])
    const {title,price,img}=classTwoInfo;
    console.log(classTwoInfo)
    return (
        <div>
            <h2>{title}</h2>
            <img src={img} alt="" />
            <h4>Price:{price}</h4>
        </div>
    );
};

export default ClassTwoInfo;