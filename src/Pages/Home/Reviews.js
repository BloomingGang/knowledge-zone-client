import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import quote from '../../../src/img/quote.png'

const Reviews = () => {
  const members = [
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student1.jpg?auto=format&fit=max&w=3840",
      name: "Chiamaka",
      description:
        "You are learning and you're having fun at the same time. And it's almost like you are playing a game.",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student8.jpg?auto=format&fit=max&w=1920",
      name: "Alex",
      description:
        "Learning coding is like learning a new language. If you get the right teacher, you can learn it very easily.            ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student3.jpg?auto=format&fit=max&w=3840",
      name: "Jake            ",
      description:
        "What I'm doing with block coding, HTML and mobile apps is I'm actually making publishable apps which is really cool!",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student4.jpg?auto=format&fit=max&w=3840",
      name: "Tyler",
      description:
        "My teacher and I are coding a new space simulator comparing the gravities of black holes to Mars.            ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student5.jpg?auto=format&fit=max&w=3840",
      name: "Anay",
      description:
        "My skills have really improved!...I also like coding because it serves as a fun way to learn math, which is one of my least favorite subjects.            ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student6.jpg?auto=format&fit=max&w=3840",
      name: "Chris",
      description:
        "I really like how there’s different courses that you can learn with and how there are contests like the Summer Code Jam that you can win cool prizes.            ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/us/images/students/student7.jpg?auto=format&fit=max&w=3840",
      name: "Tessa            ",
      description:
        "Why do I like to code? It’s just fun! It’s fun to create your own games – you get to look at all these other games, it’s really fun. It’s exciting to know that you can create your own game.            ",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-10">
      <section
        // className='my-20'
        id="team-section"
      >
        <div className="container mx-auto">
          <div className="mb-12 w-full mx-auto">
            <h3 className="text-center text-4xl font-bold text-violet-800 pt-10">
              Millions Of Happy Students And Counting
            </h3>
          </div>

          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4">
            <div></div>
          </div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {members.slice(members.length-3, members.length).map((member, index) => (
                <div  key={index} class="p-4 w-full">
                <div class="h-[270px] bg-indigo-100 p-8 rounded-xl">
                  <img src={quote} width={30} alt="" />
                  <p class="leading-relaxed mb-6">{member.description}</p>
                  <a class="inline-flex items-center">
                    <img alt="testimonial"  src={member.avatar} class="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-indigo-800">{member.name}</span>
                      <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                    </span>
                  </a>
                </div>
              </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
