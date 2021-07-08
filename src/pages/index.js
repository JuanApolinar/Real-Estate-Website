import React from 'react';
import Hero from '../components/Hero';
import Listings from '../components/Listings';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import Features from '../components/Features';
import InfoSection from '../components/InfoSection';
import { SliderData } from '../data/SliderData';

const Home = () => {
    return (
        <>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
            <Listings />
            <Features />
            <InfoSection {...InfoDataTwo}/>
        </>
    )
}

export default Home
