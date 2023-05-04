import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "./slide1.2.png"
import Slide2 from "./slide2.jpg"
import Slide3 from "./slide3.jpg"

const ImgSlider = () => {
    
  return (
    <Carousel fluid="lg" 
              className='h-75 z-index-1 indicators-false '
              controls={false} 
              indicators={false}>
      <Carousel.Item interval={2000}>
            <img className="d-block w-100"
                 src={Slide1}
                 alt="First slide"/>

      </Carousel.Item>

      <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 "
                  src={Slide2}
                  alt="second slide"/>


      </Carousel.Item>
      <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={Slide3}  
                  alt="Third slide"/>
       </Carousel.Item>
      
    </Carousel>
  );
}



export default ImgSlider