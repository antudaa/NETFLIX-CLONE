import React from 'react';
import Request from '../../Components/Requests/Requests';
import Banner from './Banner/Banner';
import Row from './Row/Row';

const HomePage = () => {


    return (
        <div>
            <Banner />
            <Row title='Popular' url={Request.Popular} />
            <Row title='Top Rated' url={Request.TopRated} />
            <Row title='Trending' url={Request.Trending} />
            <Row title='UpComing' url={Request.UpComing} />
            <Row title='Horror' url={Request.Horror} />
        </div>
    );
};

export default HomePage;