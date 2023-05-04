import React from 'react'
import FbNavbar from "../../components/fbnavbar/FbNavbar";
import { Features } from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Feedback from '../../components/forms/Feedback';
import AboutUs from "../../components/aboutUs/AboutUs";
import ImgSlider from "../../components/img_slider/ImgSlider";

const User = () => {
  return (
    <>
    <FbNavbar  type="user" />
      <ImgSlider />
      <Features type="user" />
      <br/>
      <Feedback/>
      <br/>
      <AboutUs/>
       <br/>
      <Footer/>

    </>
  )
}

export default User