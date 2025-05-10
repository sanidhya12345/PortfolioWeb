import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <AboutSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;