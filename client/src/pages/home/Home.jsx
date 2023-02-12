import { Features } from "../../components/features/Features";
import Header from "../../components/header/Header";
import ImgSlider from "../../components/img_slider/ImgSlider";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <ImgSlider/>
      <Features  />
    </div>
  )
}

export default Home