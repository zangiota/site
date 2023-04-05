import React from "react";
import Header from '../UzPageComponents/Header';
import Main from '../UzPageComponents/Main';
import AboutMosque from '../UzPageComponents/AboutMosque';
//import Carouselgallery from '../UzPageComponents/gallery';
//import CarouselEmployee from '../UzPageComponents/CarouselEmployee';
import MosquSlider from '../UzPageComponents/slide';
import PrayerTime from '../UzPageComponents/PrayerTime';
import Footer from '../UzPageComponents/Footer';
import Appvideo from '../UzPageComponents/video';
import Mainvideo from '../UzPageComponents/donate';

const UzPage = () => {
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

export default UzPage;