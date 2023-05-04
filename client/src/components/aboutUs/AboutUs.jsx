import React, { useState } from 'react'
import { Col, Image, Row, Container, ProgressBar} from "react-bootstrap";
import img3 from '../../images/img3.jpg';
import useFetch from '../../useFetch/usefetch';
import axios from 'axios';


const AboutUs = () => {
  
  let {datas} = useFetch("http://localhost:8800/api/auth/getOrg")
  var org = datas.length;

  const [ newdata , seData ] = useState('');

  var l = false
  const help =async () =>{
  while(l===false)
  {let data = await axios.get("http://localhost:8800/api/missingChild/")
  let len = data.data.length
  seData(len);
  l = true
  }}
  help()
    
    return (
      <section id="about" className="block about-block pt-4 pb-4 ">
        <Container className='shadow-lg border-white rounded-4 pb-4'>
          <div className="title-holder p-4 d-flex justify-content-center">
            <h2 className='text-danger '>About Us</h2>
          </div>
          <Row>
            <Col sm={6} className='d-flex justify-content-center'>
              <Image src={img3} className='rounded-4 shadow '/>
            </Col>
            <Col sm={6}>
              <p>We are here to manage orphans in a distributed transaction system. We ensures that orphans cannot observe inconsistencies and that orphans are eventually eliminated.Thus, make allowing orphans to get necessary needs in their life. Our website includes different organizations and these organizations provide help for these people through our website</p>
              <p>All the functionalities in an Organization have been added to this system like organizations can register services, sponsors and they can provide awareness to the public users and also organization and users can report missing child and view the case status so they can update the status of cases and they can identify the missing child technically through artificial intelligence</p>
              <br></br><div className='progress-block '>
                <h4>Helped organisations</h4>
                <ProgressBar variant="danger"  now={100}  label={`${org}+`} />
              </div>
              <div className='progress-block'>
                <h4>Helped missing cases</h4>
                <ProgressBar variant="danger"  now={100} label={`${newdata}+`} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default AboutUs