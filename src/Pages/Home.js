import React from 'react';
import About from "../components/Home/About/About";
import Brands from "../components/Home/Brands/Brands";
import Feature from "../components/Home/Feature/Features";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import Banner from '../components/Home/Banner/Banner';
import Logos from "../components/Home/Logos/Logos";
import Offer from "../components/Home/Offer/Offer";
import Popular from "../components/Home/Popular/Popular"

const Home = () => {
    return (
        <main>
            <Header/>
            <Banner/>
            <About/>
            <Popular/>
            <Feature/>
            <Brands/>
            <Offer/>
            <Logos/>
            <Footer/>
        </main>
    );
};

export default Home;