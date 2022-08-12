import React from 'react';
import img1 from '../../../img/assets/10001.jpg';
import img2 from '../../../img/assets/10002.jpg';
import img3 from '../../../img/assets/10003.jpg';
import img4 from '../../../img/assets/10005 (2).jpg';
import img5 from '../../../img/assets/10006 (2).jpg';

const Bengali = () => {
    const instructors = [
        {
            img: img1,
            name: 'Faysal Karim',
            education: 'B.A Honours in Bangla, DU',
        },
        {
            img: img2,
            name: 'Hossain Rafi',
            education: 'B.A Honours in Bangla, JU',
        },
        {
            img: img3,
            name: 'Rakib Mia',
            education: 'B.A Honours in Bangla, RU',
        },
        {
            img: img4,
            name: 'Kausar Ahamed',
            education: 'B.A Honours in Bangla, BU',
        },
        {
            img: img5,
            name: 'Saddam Hossain',
            education: 'B.A Honours in Bangla, CU',
        }
    ]
    return (
        <div className='mx-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {
                instructors.map((instructor, index) => <div
                    key={index}
                    className="instructor relative">
                    <figure className="">
                        <img style={{ height: "300px" }} src={instructor.img} alt="instructor" className="picture" />
                    </figure>
                     <div className='socialIcon text-2xl sm:text-center'>
                     <a href="" target={'_blank'}> <i class="icon fa-brands fa-twitter"></i></a>
                     <a href="" target={'_blank'} rel='noreferrer'> <i id='fb' class="icon fa-brands fa-facebook-f"></i></a>
                     <a href="" target={'_blank'} rel='noreferrer'> <i class="icon fa-brands fa-linkedin-in"></i></a>
                 </div>
                    <div className=" text-center">
                        <h2 className="card-title text-primary">{instructor.name}</h2>
                        <h3>{instructor.education}</h3>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Bengali;