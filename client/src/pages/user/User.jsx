import React from 'react'
import FbNavbar from "../../components/fbnavbar/FbNavbar";
import { Features } from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Feedback from '../../components/forms/Feedback';

import ImgSlider from "../../components/img_slider/ImgSlider";

const User = () => {
  return (
    <>
    <FbNavbar  type="user" />
      <ImgSlider />
      <Features type="user" />
      <Feedback/>
      <br></br>
      <Footer/>

    </>
  )
}

export default User