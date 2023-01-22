import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Row = ({ title, url, typeID }) => {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setMovies(response.data.results)
            })
    }, [url]);

    const slideLeft = () => {
        let slider = document.getElementById('slider' + typeID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + typeID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40}
                    className='rounded-full left-0 absolute bg-white opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block' />
                <div
                    id={'slider' + typeID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {
                        movies.map((movie, i) =>
                            <MovieCard key={i} movie={movie} />
                        )
                    }
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    size={40} className='rounded-full right-0 absolute bg-white opacity-50 hover:opacity-100 cursor-pointer z-15 hidden group-hover:block' />
            </div>
        </div>
    );
};

export default Row;