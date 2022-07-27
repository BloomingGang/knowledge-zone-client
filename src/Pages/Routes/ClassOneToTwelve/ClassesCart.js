import React from 'react';

const ClassesCart = ({course}) => {
    const {price,title,img}=course
    return (
            <section>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={img} alt="course" /></figure>
                <div class="card-body">
                    <h2 class="card-title"> {title}</h2>
                    <div class="divider"></div>
                    <div class="flex  justify-between items-center">
                        <span > <span className='text-xl font-bold'>Price:</span>  <span className='text-lg font-bold text-primary'>${price}</span></span>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesCart;