import React from 'react'
import { Col, Image, Row, Container, ProgressBar} from "react-bootstrap";
import img3 from '../../images/img3.jpg';


const AboutUs = () => {
  
    const html = 80;
    const responsive = 95;
    const photoshop = 60;
    
    
    return (
      <section id="about" className="block about-block pt-4 pb-4 ">
        <Container className='shadow-lg border-white rounded-4 pb-4'>
          <div className="title-holder p-4 d-flex justify-content-center">
            <h2>About Us</h2>
          </div>
          <Row>
            <Col sm={6} className='d-flex justify-content-center'>
              <Image src={img3} className='rounded-4 shadow '/>
            </Col>
            <Col sm={6}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
              <div className='progress-block '>
                <h4>Helped organisations</h4>
                <ProgressBar now={html} label={`${html}%`} />
              </div>
              <div className='progress-block'>
                <h4>Helped missing cases</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
              </div>
              <div className='progress-block'>
                <h4>Helped orphans</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default AboutUs