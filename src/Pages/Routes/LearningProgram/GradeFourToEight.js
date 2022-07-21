import React from 'react';
import { Outlet } from 'react-router-dom';
import iconImg from '../../../img/assets/LearningProgram/Live.png'
import img from '../../../img/assets/LearningProgram/study.png'
import ProgramCart from './ProgramCart';

const GradeFourToEight = () => {
    const programData = [
        {
            id: 1,
            icon: iconImg,
            title: "Glooming gang Live 4-on-4",
            programs: ['coding', 'music'],
            description: 'Personalised, 4-on-4 tutoring classes with expert teachers.',
            program_img:img,
        },
        {
            id: 2,
            icon: iconImg,
            title: "Glooming gang Live 5-on-5",
            programs: ['coding', 'music','coding', 'music'],
            description: 'Personalised, 5-on-5 tutoring classes with expert teachers.',
            program_img:img,
        },
        {
            id: 3,
            icon: iconImg,
            title: "Glooming gang Live 6-on-6",
            programs: ['coding', 'music'],
            description: 'Personalised, 6-on-6 tutoring classes with expert teachers.',
            program_img:img,
        },
        {
            id: 4,
            icon: iconImg,
            title: "Glooming gang Live 7-on-8",
            programs: ['coding', 'music'],
            description: 'Personalised, 7-on-8 tutoring classes with expert teachers.',
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

export default GradeFourToEight;