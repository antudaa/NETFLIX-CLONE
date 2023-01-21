import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 w-full absolute'>
            <h1 className='text-red-600 text-2xl lg:text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            <div>
                <button className='lg:pr-4 pr-2 cursor-pointer text-white'>Sign In</button>
                <button className='bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 cursor-pointer rounded-sm'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;