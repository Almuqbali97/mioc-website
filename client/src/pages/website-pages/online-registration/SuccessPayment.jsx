import React from 'react';

const SuccessPayment = () => {
    return (
        <div className='h-[85vh] flex justify-center items-center'>

            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg ">
                <p className="text-lg font-semibold">Order Status: Confirmed</p>
                <p>Your order has been successfully confirmed and is now being processed.</p>
                <p>Kindly Check your email</p>
            </div>
        </div>
    );
}

export default SuccessPayment;
