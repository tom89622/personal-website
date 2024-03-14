import React from "react";
import HeroSection from "../Herosection";
import Navbar from "../Navbar";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Navbar/>
      <MySkills/>          
      <AboutMe/>
      <MyPortfolio/>
      <ContactMe/>
      <Footer/>
    </>
  )
}