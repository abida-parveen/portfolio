import React from 'react';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Overview from '../components/Overview';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Overview />
            <Blogs />
        </React.Fragment>
    );
}

export default Home;
