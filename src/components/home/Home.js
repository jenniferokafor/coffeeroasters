import Header from '../shared/Header';
import HomeHero from '../home/HomeHero.js';
import Collection from '../home/Collection.js';
import WhyUs from '../home/WhyUs.js';
import HowItWorks from '../home/HowItWorks.js';
import Footer from '../shared/Footer.js';

export default function  Home () {
    return (
        <>
        <Header />
        <HomeHero />
        <Collection />
        <WhyUs />
        <HowItWorks />
        <Footer />
      </>
    )
}