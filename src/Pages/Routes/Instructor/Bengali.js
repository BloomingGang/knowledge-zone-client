import React from 'react';

const Bengali = () => {
    const instructors = [
        {
            name:'Faysal Karim'
        },
        {
            name:'Faysal Karim'
        },
        {
            name:'Faysal Karim'
        },
        {
            name:'Faysal Karim'
        },
        {
            name:'Faysal Karim'
        },
        {
            name:'Faysal Karim'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {
                    instructors.map((instructor, index) => <div
                    key={index} 
                    class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">{instructor.name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>) 
            }
            
        </div>
    );
};

export default Bengali;