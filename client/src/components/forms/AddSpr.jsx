import React from 'react'
import { Col, Row, Container, Card, Form } from 'react-bootstrap';


const AddSpr = () => {
  return (
        
    <div>
        
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="px-4 shadow-lg border-0 rounded-2">
            <Card.Body>
              <div className="mb-3 mt-md-4 ">
                <div className=' rounded d-flex justify-content-center text-danger '>
                        {/* <img 
                              alt='img'
                              src="images/fblogo-rd"
                              width="40px"
                              height="40px" 
                              className="  shadow-sm rounded-circle  mt-0 mb-4  "
                              
                          /> */} 
                          <h2 >Add sponsor for organisation</h2>
                 </div>
                <div className="mb-3">
                  <Form onSubmit="">
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="text-center">Name</Form.Label>
                      <Form.Control className='shadow border-0' type="text" placeholder="Enter sponsor's Name" name="name"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control className='shadow border-0' type="email" placeholder="Enter sponsor's email"  name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label className="text-center">
                        Phone Number
                      </Form.Label>
                      <Form.Control className='shadow border-0' type="tel" placeholder="Enter sponsor's phonenumber"  name="phone" />
                    </Form.Group>

                  
                    <br/>
                    <div className="d-grid">
                    <input className="bg-danger rounded-2 border-danger text-white"
                    type="submit" value="Add sponsor"
                   />
                     {/*  <Button variant="primary" type="submit" onClick={handlesubmit()}>
                        Create Account
                      </Button> */}
                    </div>
                  </Form>
                    
                  </div>
                </div>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>


  )
}

export default AddSpr