import React from 'react';

const ClassesCart = ({course,handlePurchase}) => {
    const {price,title,img,_id}=course
    return (
            <section>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={img} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {title}</h2>
                    <div className="divider"></div>
                    <div className="flex  justify-between items-center">
                        <span > <span className='text-xl font-bold'>Price:</span>  <span className='text-lg font-bold text-primary'>${price}</span></span>
                        <button 
                        className="btn btn-primary"
                        onClick={()=>handlePurchase(_id)}
                        >Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesCart;