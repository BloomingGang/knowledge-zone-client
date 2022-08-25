import React from 'react';
import useMyOrder from '../../hooks/useMyOrder';
import Product from './MyOrder/Product';

const MyCollection = () => {
    const [myOrder] = useMyOrder(["paidOrder"]);
    return (
        <div>
          <h1 className="text-3xl font-bold text-center p-4">My Collection </h1>
    
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="text-xl">No</th>
                  <th className="text-xl">Product Name</th>
                  <th className="text-xl">Email</th>
                  <th className="text-xl">Pay</th>
                  <th className="text-xl">Cancel Order</th>
                </tr>
              </thead>
              <tbody>
                {myOrder.map((order, index) => (
                  <Product order={order} index={index}></Product>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default MyCollection;