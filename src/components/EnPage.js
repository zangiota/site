import React from "react";
import Header from "../EnPageComponents/Header";
import Main from "../EnPageComponents/Main";
import AboutMosque from "../EnPageComponents/AboutMosque";
//import Carouselgallery from "../EnPageComponents/gallery";
//import CarouselEmployee from "../EnPageComponents/CarouselEmployee";
import MosquSlider from '../EnPageComponents/slide';
import PrayerTime from '../EnPageComponents/PrayerTime';
import Footer from '../EnPageComponents/Footer';
import Appvideo from '../EnPageComponents/video';
import Mainvideo from '../EnPageComponents/donate';


const EnPage = () => {
    return (
        <>
            <Header />
            <Main />
            <Mainvideo />
            <Appvideo />
            <AboutMosque />
            <MosquSlider />
            <PrayerTime />
            <Footer />
        </>
    )
}

export default EnPage;