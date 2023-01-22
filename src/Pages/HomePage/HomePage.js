import React from 'react';
import Request from '../../Components/Requests/Requests';
import Banner from './Banner/Banner';
import Row from './Row/Row';

const HomePage = () => {


    return (
        <div>
            <Banner />
            <Row typeID='1' title='Popular' url={Request.Popular} />
            <Row typeID='2' title='Top Rated' url={Request.TopRated} />
            <Row typeID='3' title='Trending' url={Request.Trending} />
            <Row typeID='4' title='UpComing' url={Request.UpComing} />
            <Row typeID='5' title='Horror' url={Request.Horror} />
        </div>
    );
};

export default HomePage;