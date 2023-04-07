import React from 'react'
import { Col, Button, Row, Container, Card} from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const Feedbackres = () => {
  
    const navigate = useNavigate();
  
    return (
  <div>
     
     
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
                    <h2 className="fw-bold mb-2 text-uppercase ">Response verified.</h2>
                    <br/>
                    
                    <Button className=' bg-danger text-white shadow rounded-2 align-text-center border-danger' onClick={() => navigate(-1)} >
                       Back
                    </Button>    
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
  
      </div>
  
  )
}

export default Feedbackres