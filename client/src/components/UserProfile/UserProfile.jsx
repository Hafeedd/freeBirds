import React from 'react'
import { useState } from 'react';
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import male from "./../../images/male.png"
import female from "./../../images/female.png"


const UsrProfile = () => {
    const [EditProfile , setEditProfile] = useState(false);
    const user={
     name: 'hafeed',
    email:'hafeed@gamil.com',
    phone:'9867589876',
    password:'hafeed',
    state:'kerala',
    city:'calicut',

  }

    const ChangeEdit = () => {
        setEditProfile(!EditProfile);
      }

  return (
    <div>
       <Container>
        <Row className=" mt-5 h-100 w-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12} className="vw-100">
            <Card className="px-4 vw-75 shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4 ">
                    <div className='text-start'>
                        

               {/*  <img 
                      alt='img'
                      src={male} /* {female} 
                      width="100px"
                      height="100px" 
                      className="  shadow-sm rounded-circle align-self-center mt-0 mb-4  "
                  /> */}
                  <Button variant="primary" type="submit" onClick={()=>ChangeEdit()}>Edit</Button>
                  
                  </div>
                  
                  <div className="mb-3">
                    {(EditProfile === false) ? 
                                                <div className='pt-5 vw-100'>
                            <h6> Name : {user.name}</h6>
                            <h6> Email : {user.email}</h6>
                            <h6> Phone : {user.phone}</h6>
                            <h6> password : {user.name}</h6>
                            <h6> city : {user.city}</h6>
                            <h6> state : {user.state}</h6>
                            {console.log("user details")}
                        </div>

                    :<div>
                    <Form /* onSubmit={handleSubmit} */ >
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" className='shadow border-0'
                         name="name"  />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className='shadow border-0'
                         name="email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="tel"  className='shadow border-0' placeholder="Enter phone number" 
                         name="phone" />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter State" className='shadow border-0'
                         name="state" />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter city" className='shadow border-0'
                         name="city" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className='shadow border-0'
                         name="password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                      {console.log("edit form ")}
                      <input className="bg-danger rounded-2 border-danger text-white"
                      type="submit" value="update"
                     />

                      </div>
                    </Form>
                    </div>
                       
                    }


                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        want to go back?{' '}
                        <Link to="/User">Home</Link>
                      </p>
                    </div>
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

export default UsrProfile