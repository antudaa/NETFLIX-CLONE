import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Request from '../../../Components/Requests/Requests';

const Banner = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(Request.Popular)
            .then((response) => {
                setMovies(response.data.results);
            });
    }, []);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h2 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h2>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 ml-4 py-2 px-5 hover:bg-red-600 hover:border-none'>Watch Later</button>
                    </div>
                    <p className='text-sm text-gray-400'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{
                        movie?.overview.length >= 150 ?
                            movie?.overview.slice(0, 150) + '...' :
                            movie?.overview
                    }</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;