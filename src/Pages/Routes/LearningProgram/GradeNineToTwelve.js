import React from 'react';
import { Outlet } from 'react-router-dom';

const GradeNineToTwelve = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            grade twelve to nine 
            <Outlet></Outlet>
        </div>
    );
};

export default GradeNineToTwelve;