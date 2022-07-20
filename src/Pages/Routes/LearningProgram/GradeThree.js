import React from 'react';
import { Outlet } from 'react-router-dom';

const GradeThree = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
             grade three
             <Outlet></Outlet>
        </div>
    );
};

export default GradeThree;