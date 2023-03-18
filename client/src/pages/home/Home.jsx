import FbNavbar from "../../components/fbnavbar/FbNavbar";
import { Features } from "../../components/features/Features";
import Footer from "../../components/footer/Footer";

import ImgSlider from "../../components/img_slider/ImgSlider";
import "./home.css";

const Home = () => {
  return (
    <div>
      <FbNavbar  type="home" />
      <ImgSlider className="" />
      <Features className=" " />
      <Footer/>
    </div>
  )
}

export default Home