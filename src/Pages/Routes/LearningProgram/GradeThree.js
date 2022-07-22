import React from 'react';
import {  Outlet } from 'react-router-dom';
import iconImg from '../../../img/assets/LearningProgram/Live.png'
import img from '../../../img/assets/LearningProgram/study.png'
import ProgramCart from './ProgramCart';

const GradeThree = () => {
    const programData = [
        {
            id: 1,
            icon: iconImg,
            title: "Glooming gang Live 1-on-1",
            programs: ['coding', 'music'],
            description: 'Personalised, 1-on-1 tutoring classes with expert teachers.',
            program_img:img,
        },
        {
            id: 2,
            icon: iconImg,
            title: "Glooming gang Live 1-on-1",
            programs: ['coding', 'music','coding', 'music'],
            description: 'Personalised, 2-on-2 tutoring classes with expert teachers.',
            program_img:img,
        },
        {
            id: 3,
            icon: iconImg,
            title: "Glooming gang Live 3-on-3",
            programs: ['coding', 'music'],
            description: 'Personalised, 1-on-1 tutoring classes with expert teachers.',
            program_img:img,
        }
    ]

    return (
        <div className=' grid lg:grid-cols-2 grid-cols-1 items-center container mx-auto gap-5'>

          {
            programData.map((info)=><ProgramCart
            key={info.id}
            info={info}
            ></ProgramCart>)
          }

                <Outlet></Outlet>
            
        </div>
    );
};

export default GradeThree;