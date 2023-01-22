import React from 'react';


const Navbar = () => {

    
    return (
        <div className='flex items-center justify-between p-4 w-full absolute z-[100]'>
            <h1 className='text-red-600 text-2xl lg:text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            <div>
                <button className='text-white px-2 py-1 lg:px-6 lg:py-2 cursor-pointer hover:bg-red-600 rounded-sm mr-2'>Sign In</button>
                <button className='bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 cursor-pointer rounded-sm hover:bg-white hover:text-black'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;