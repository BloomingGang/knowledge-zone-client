import React from 'react';

const EduBanner = () => {
    return (
       <section className='container mx-auto my-10'>
            <div class="flex flex-col lg:flex-row">
                <div>
                    <img src="https://byjus-f9igwgtqi.whjr.dev/images/aboutus/kids.png" alt='' className="md:max-w-md lg:max-w-lg rounded-lg" />
                </div>

                <div className='flex flex-col  justify-center px-5'>
                    <h1 class="lg:text-5xl text-4xl text-blue-500 font-bold">Education for All</h1>
                    <div class="carousel w-full py-8">
                        <div id="item1" class="carousel-item w-full">

                            <h1 class="text-3xl font-bold ">Making dreams come true with the power of education.</h1>
                        </div>
                        <div id="item2" class="carousel-item w-full">
                            <h1 class="text-3xl font-bold">3.4 Millions+ students connected to the education within a year.</h1>
                        </div>
                        <div id="item3" class="carousel-item w-full">
                            <h1 class="text-3xl font-bold">On a mission to empower 10 Million+ children by 2025.</h1>
                        </div>

                    </div>
                    <div class="flex py-2 gap-2">
                        <a href="#item1" class="btn btn-xs">1</a>
                        <a href="#item2" class="btn btn-xs">2</a>
                        <a href="#item3" class="btn btn-xs">3</a>
                    </div>


                   <div>

                    <button class="btn btn-primary bg-gradient-to-r from-blue-500 to-violet-700 border-0 ">Know More</button>
                   </div>
                
                </div>
            </div>
       </section>
    );
};

export default EduBanner;