import React from 'react';

const Chemistry = () => {
    const instructors = [
        {
            img:'https://i.ibb.co/5K8Jrcy/20210309-143715.jpg',
            name:'Faysal Karim',
            education: 'B.A',
            speech:'The expert in anything was once a beginner'
        },
        {
            img:'https://i.ibb.co/QcXxxGJ/me.jpg',
            name:'Hossain Rafi',
            education: 'B.A',
            speech:'The expert in anything was once a beginner'
        },
        {
            img:'https://i.ibb.co/k0VGsrX/294706853-594656798735676-1883816395034222539-n-removebg-preview.png',
            name:'Rakib Mia',
            education: 'B.A',
            speech:'The expert in anything was once a beginner'
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {
                instructors.map((instructor, index) => <div
                key={index} 
                class="card bg-base-100 shadow-xl">
                <figure class="px-4 pt-4">
                  <img style={{height: "300px"}} src={instructor.img} alt="instructor" class="rounded-xl " />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{instructor.name}</h2>
                  <h3>{instructor.education}</h3>
                  <p>{instructor.speech}</p>
                </div>
              </div>) 
        }
        
    </div>
    );
};

export default Chemistry;