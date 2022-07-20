import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';


const Reviews = () => {


    const members = [
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student1.jpg?auto=format&fit=max&w=3840",
            name: 'Chiamaka',
            description: "You are learning and you're having fun at the same time. And it's almost like you are playing a game.",

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student8.jpg?auto=format&fit=max&w=1920",
            name: 'Alex',
            description: 'Learning coding is like learning a new language. If you get the right teacher, you can learn it very easily.            ',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student3.jpg?auto=format&fit=max&w=3840",
            name: 'Jake            ',
            description: "What I'm doing with block coding, HTML and mobile apps is I'm actually making publishable apps which is really cool!",

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student4.jpg?auto=format&fit=max&w=3840",
            name: 'Tyler',
            description: 'My teacher and I are coding a new space simulator comparing the gravities of black holes to Mars.            ',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student5.jpg?auto=format&fit=max&w=3840",
            name: 'Anay',
            description: 'My skills have really improved!...I also like coding because it serves as a fun way to learn math, which is one of my least favorite subjects.            ',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student6.jpg?auto=format&fit=max&w=3840",
            name: 'Chris',
            description: 'I really like how there’s different courses that you can learn with and how there are contests like the Summer Code Jam that you can win cool prizes.            ',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student7.jpg?auto=format&fit=max&w=3840",
            name: 'Tessa            ',
            description: 'Why do I like to code? It’s just fun! It’s fun to create your own games – you get to look at all these other games, it’s really fun. It’s exciting to know that you can create your own game.            ',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student2.jpg?auto=format&fit=max&w=3840",
            name: 'Sai',
            description: 'The thing about Tynker is that there are so many ways you can channel your creativity into code, so many different types of projects, and the code is clean and easy to understand.            ',

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
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <section
                // className='my-20'
                id='team-section'
            >
                <div className='container mx-auto'>

                    <div className='mb-12 w-full mx-auto'>
                        <h3 className='text-center text-4xl font-bold text-black'>
                            Millions of happy students and counting
                        </h3>
                    </div>

                    <div className='flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4'>
                        <div>


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