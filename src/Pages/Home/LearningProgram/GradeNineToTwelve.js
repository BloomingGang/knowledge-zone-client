import React from 'react';
import { Outlet } from 'react-router-dom';
import iconImg from '../../../img/assets/LearningProgram/Live.png'
import img from '../../../img/assets/LearningProgram/study.png'
import ProgramCart from './ProgramCart';

const GradeNineToTwelve = () => {
    const programData = [
        {
            id: 1,
            icon: iconImg,
            title: "Glooming gang Live 9-on-9",
            programs: ['coding', 'music'],
            description: 'Personalised, 9-on-9 tutoring classes with expert teachers.',
            program_img: img,
        },
        {
            id: 2,
            icon: iconImg,
            title: "Glooming gang Live 10-on-10",
            programs: ['coding', 'music', 'coding', 'music'],
            description: 'Personalised, 10-on-10 tutoring classes with expert teachers.',
            program_img: img,
        },
        {
            id: 3,
            icon: iconImg,
            title: "Glooming gang Live 11-on-11",
            programs: ['coding', 'music'],
            description: 'Personalised, 11-on-11 tutoring classes with expert teachers.',
            program_img: img,
        },
        {
            id: 4,
            icon: iconImg,
            title: "Glooming gang Live 12-on-12",
            programs: ['coding', 'music'],
            description: 'Personalised, 12-on-12 tutoring classes with expert teachers.',
            program_img: img,
        }
    ]
    return (
        <div className=' grid lg:grid-cols-2 grid-cols-1 items-center container mx-auto gap-5'>

            {
                programData.map((info) => <ProgramCart
                    key={info.id}
                    info={info}
                ></ProgramCart>)
            }

            <Outlet></Outlet>

        </div>
    );
};

export default GradeNineToTwelve;