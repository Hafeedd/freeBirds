import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
/* import Image from 'react-bootstrap/Image' */
const ImgSlider = () => {
    
  return (
    <Carousel className='h-75 z-index-1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
/*           style={{height : 700 ,width:}} */
          src="images/slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='pl-3 '>
          <h3>First slide label</h3> 
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className>
        <img
          className="d-block w-100 "
          src="images/slide2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='text-light d-flex justify-content-center align-items-center flex-column text-center'>
          <h3>second slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src='images/slide3.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className=' font-monospace'>Find missing child with us</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}



export default ImgSlider