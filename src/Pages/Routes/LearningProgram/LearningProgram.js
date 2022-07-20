import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LearningProgram = () => {
    return (
        <section className=' text-3xl'>
            <h1 className='text-6xl'>THis is learning page</h1>
            <div className='text-center'>
            <Link  className='mr-5' to={'/home/gradeThree'}>Grade 3</Link>
            <Link className='mr-5' to={'/home/gradeEight'}>Grade 4 to 8</Link>
            <Link className='mr-5' to={'/home/gradeTwelve'}>Grade 9 to 12</Link>
            </div>
            <Outlet></Outlet>
        </section>
    );
};

export default LearningProgram;