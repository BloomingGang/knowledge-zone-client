import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';


const Reviews = () => {


    const members = [
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student1.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student2.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student3.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student4.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student5.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student6.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student7.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student2.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student8.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student1.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student2.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student4.jpg?auto=format&fit=max&w=3840",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',
            
        },
        
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div>
          <section
            className='my-20'
            id='team-section'
        >
            <div className='container mx-auto'>
                <div className='flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4'>
                    <div>
                        
                        <div className='mb-12'>
                            <h3 className='text-center text-4xl font-bold text-black'>
                            Millions of happy students and counting
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel
                        swipeable='true'
                        responsive={responsive}
                        infinite={true}
                    >
                        {
                            members.map((member, index) => <div
                                key={index}
                                className='mx-2'
                            >
                                <div className='rounded-2xl py-4 border w-fit'>
                                    <div>
                                        <img src={member.avatar} alt={`avatar${index}`} className='mx-auto' />
                                    </div>
                                    <div
                                        className='bg-white text-center rounded-2xl'
                                    >
                                        <div className='ml-2 mb-2'>
                                            <h6 className='text-[#00B3FF]'>{member.name}</h6>
                                            <p className='text-sm'>{member.description}</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
        </section>  
        </div>
    );
};

export default Reviews;