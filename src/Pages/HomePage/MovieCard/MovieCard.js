import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


const MovieCard = ({ movie }) => {


    const [like, setLike] = useState(false);

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer inline-block relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 opacity-0 text-white'>
                <p className='white-space-normal text-xs md:text-xm font-bold flex justify-center items-center h-full text-center'>{movie?.title}</p>
                <p>
                    {
                        like ? <FaHeart className='absolute top-4 right-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 right-4 text-gray-300' />
                    }
                </p>
            </div>
        </div>
    );
};

export default MovieCard;