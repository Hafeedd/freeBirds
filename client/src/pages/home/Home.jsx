import FbNavbar from "../../components/fbnavbar/FbNavbar";
import { Features } from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import React from 'react';
import ImgSlider from "../../components/img_slider/ImgSlider";
import "./home.css";
import AboutUs from "../../components/aboutUs/AboutUs";

const Home = () => {
  return (
    <div style={{ background: '#f8f8f8' }}>
      <FbNavbar  type="home" />
      <ImgSlider className="" />
      <Features className=" " />
      <br/>
      <AboutUs/>
      {/* <Team/> */}
      <Footer/>
    </div>
  )
}

export default Home