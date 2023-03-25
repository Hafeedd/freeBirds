import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
/* import Image from 'react-bootstrap/Image'*/
import Slide1 from "./slide1.jpg"
import Slide2 from "./slide2.jpg"
import Slide3 from "./slide3.jpg"

const ImgSlider = () => {
    
  return (
    <Carousel fluid="lg" className='h-75 z-index-1 indicators-false  ' controls={false} indicators={false}    >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
/*           style={{height : 700 ,width:}} */
         /*  src={require("./slide1.jpg")} */
         src={Slide1}
          alt="First slide"
        />
{/*         <Carousel.Caption className='pl-3 '> <img alt="timer" src={require('./images/timer.png')} />
          <h3>First slide label</h3> 
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src={Slide2}
          alt="second slide"
        />

{/*         <Carousel.Caption className='text-light d-flex justify-content-center align-items-center flex-column text-center'>
          <h3>second slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Slide3}  
          alt="Third slide"
        />

     {/*    <Carousel.Caption>
          <h3 className=' font-monospace'>Find missing child with us</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
    </Carousel>
  );
}



export default ImgSlider