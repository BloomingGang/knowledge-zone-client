import React from 'react';
import {  Outlet } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink';

const LearningProgram = () => {
    return (
        <section className=' text-3xl overflow-x-hidden mt-10 container mx-auto'>
            <h1 className='lg:text-5xl md:text-4xl text-xl text-center '>A learning program for every student</h1>
           <div className='flex justify-center relative' >
           <div className='container mb-10 text-center flex  justify-between mt-10 sm:mx-5 lg:w-1/2 w-full  bg-[black] whitespace-nowrap mx-auto py-5 px-10 rounded-full  text-xs md:text-2xl lg:text-3xl' >
            <CustomLink  className='mr-5 px-3 lg:py-0 py-2 rounded-full hover:bg-[red]' to={'/'}>Grade 3</CustomLink>
            <CustomLink className='mr-5 px-3 lg:py-0 py-2 rounded-full hover:bg-[red]' to={'/gradeEight'}>Grade 4 to 8</CustomLink>
            <CustomLink className='px-3 py-2 lg:py-0 rounded-full hover:bg-[red]' to={'/gradeTwelve'}>Grade 9 to 12</CustomLink>
            </div>
           </div>
            <Outlet></Outlet>

            
           

        </section>
    );
};

export default LearningProgram;