import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Investor = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const investors = [
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Chan_Zuck.png?auto=format&fit=max&w=640",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/General_At.png?auto=format&fit=max&w=640",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Silverlake.png?auto=format&fit=max&w=640",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Verlinvest.png?auto=format&fit=max&w=640",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Naspers.png?auto=format&fit=max&w=256",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Tiger_Global.png?auto=format&fit=max&w=256",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Qatar.png?auto=format&fit=max&w=256",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Owl.png?auto=format&fit=max&w=256",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Lightspeed.png?auto=format&fit=max&w=256",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
        {
            avatar: "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/IFC.png?auto=format&fit=max&w=256",
            name: 'Mr . jhonny Adams',
            description: 'A quick brown fox jumps over the lazy dog.',

        },
    ]
    return (
        <div>
            <div>
                <h2 className='text-center text-5xl font-bold text-black'> Our Investors </h2>
                <h4 className='text-center text-xl text-black'>50+ Investors who have been strong partners in our growth story</h4>
                <Slider {...settings}>

                    {

                        investors.map((investor, index) => <div
                            key={index}

                        >

                            <div class="card w-96 bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10">
                                    <img src={investor.avatar} alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <p>{investor.description}</p>
                                    <h2 class="card-title">{investor.name}</h2>

                                </div>
                            </div>
                        </div>

                        )}

                </Slider>
            </div>
        </div>
    );
};

export default Investor;