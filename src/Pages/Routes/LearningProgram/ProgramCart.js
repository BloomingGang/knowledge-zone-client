import React from 'react';
import { Link } from 'react-router-dom';


const ProgramCart = ({info}) => {
    const {icon,title,programs,description,program_img}=info
    return (
        <div className='w-full hover:shadow-xl'>

                <div className=" bg-base-100 shadow-xl p-5">
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div className='flex w-full ' >
                        <div className='w-[60%] flex flex-col justify-around'>
                            <h3 className='lg:text-4xl md:text-4xl font-bold mb-5 lg:mb-0 md:mb-0  mr-5'>{title}</h3>
                            <div className='mb-5 lg:mb-0 md:mb-0 '>
                                {
                                    programs?.map((program)=> <Link to='#' className='text-sm border-2 bg-black text-white rounded-2xl p-2 outline-none whitespace-pre-wrap'> {program}</Link>)
                                }
                               
                               
                            </div>
                            <div className='mb-5 lg:mb-0 md:mb-0 '>
                                <p className='text-base'>
                                    {description}
                                </p>
                            </div>
                            <div>
                                <Link to={'#'} className="btn"> EXPLORE &gt; </Link>
                            </div>


                        </div>
                        <div className='w-[40%]'>
                            <img className='w-full' src={program_img} alt="" />
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default ProgramCart;