import React from 'react';
import { Outlet } from 'react-router-dom';

const GradeFourToEight = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            grade four to eight
            <Outlet></Outlet>
        </div>
    );
};

export default GradeFourToEight;