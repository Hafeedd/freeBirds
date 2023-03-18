import React from 'react'
import { Col, Button, Row, Container, Card} from "react-bootstrap";
import {  useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate();
  
  return (
<div>
    {/* <div className='justify-content-center align-items-center'>
        <div className='bg-white rounded-3 shadow-lg w-75 h-50'>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
        </div>
   </div> */}
   
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center border-2 border-danger">
          <Col md={8} lg={6} xs={12}>
            {/* <div className="border border-2 border-danger"></div> */}
            <Card className=" shadow-lg border-5  border-white vh-75">
            {/* <div className="border border-2 border-danger"></div> */}
              <Card.Body>
              <div className=' align-items-center'>
                  <img 
                      alt='img'
                      src='images/fblogo-rd.jpg'
                      width="50px"
                      height="50px" 
                      className="  shadow-sm rounded-circle align-self-center  "
                  />
                  </div>
                  <h2 className="fw-bold mb-2 text-uppercase ">Oops! You seem to be lost.</h2>
                  <br/>
                  
                  <Button className=' bg-danger text-white shadow rounded-2 align-text-center border-danger' onClick={() => navigate("/")} >
                     Home
                  </Button>    
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default NotFound