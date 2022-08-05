import React from 'react';

const Finance = () => {
    const instructors = [
        {
            img:'https://i.ibb.co/5K8Jrcy/20210309-143715.jpg',
            name:'Faysal Karim',
            education: 'BBA in Finance, DU',
        },
        {
            img:'https://i.ibb.co/QcXxxGJ/me.jpg',
            name:'Hossain Rafi',
            education: 'BBA in Finance, JU',
        },
        {
            img:'https://i.ibb.co/k0VGsrX/294706853-594656798735676-1883816395034222539-n-removebg-preview.png',
            name:'Rakib Mia',
            education: 'BBA in Finance, RU',
        },
        {
            img:'https://i.ibb.co/pjYWSz5/293666536-410740174208712-4704341600776933626-n.png',
            name:'Kausar Ahamed',
            education: 'BBA in Finance, BU',
        },
        {
            img:' https://i.ibb.co/PzND9YF/288865092-1499923620424923-4773973340299341148-n.png',
            name:'Saddam Hossain',
            education: 'BBA in Finance, CU',
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {
                instructors.map((instructor, index) => <div
                key={index} 
                className="card bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                  <img style={{height: "300px"}} src={instructor.img} alt="instructor" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-primary">{instructor.name}</h2>
                  <h3>{instructor.education}</h3>
                  <div className='text-2xl sm:text-center'>
                            <a href="" target={'_blank'}><i className="fa-brands fa-facebook-square mr-4"></i> </a>
                            <a href="" target={'_blank'} rel='noreferrer'><i className="fa-brands fa-twitter-square mr-4"></i> </a>
                            <a href="" target={'_blank'} rel='noreferrer'><i className="fa-brands fa-youtube-square"></i></a>
                        </div>
                </div>
              </div>) 
        }
        
    </div>
    );
};

export default Finance;