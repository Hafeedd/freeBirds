import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const [newUser , setNewUser] = useState({
    name: '',
    email:'',
    phone:'',
    password:'',
    state:'',
    district:'',

  });

  const navigate = useNavigate()

  const [error,setError] = useState(false);
  const [errorM,setErrorM] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:8800/api/auth/registerUser',{
      name:newUser.name,
      email:newUser.email,
      phone:newUser.phone,
      state:newUser.state,
      district:newUser.district,
      password:newUser.password,
    })
      navigate("/login")
      console.log(res)

    }catch (err){
      console.log(err.response.data)
      setError(true)
      setErrorM(err.response.data.message)
    }
    
  }

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }

  return (
    
      <div>
        
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4 shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                <img 
                      alt='img'
                      src='images/fblogo-rd.jpg'
                      width="50px"
                      height="50px" 
                      className="  shadow-sm rounded-circle align-self-center mt-0 mb-4  "
                  />
                  
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" className='shadow border-0'
                        onChange={handleChange} name="name" value={newUser.name} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className='shadow border-0'
                        onChange={handleChange} name="email" value={newUser.email}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="tel"  className='shadow border-0' placeholder="Enter phone number" 
                        onChange={handleChange} name="phone" value={newUser.phone}/>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          State
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter State" className='shadow border-0'
                        onChange={handleChange} name="state" value={newUser.state}/>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          City
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter city" className='shadow border-0'
                        onChange={handleChange} name="district" value={newUser.district}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className='shadow border-0'
                        onChange={handleChange} name="password" value={newUser.password} />
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group> */}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                      <input className="bg-danger rounded-2 border-danger text-white"
                      type="submit" value="Create account"
                     />
                       {/*  <Button variant="primary" type="submit" onClick={handlesubmit()}>
                          Create Account
                        </Button> */}
                      </div>
                    </Form>
                    <div>{error && <span>{errorM}</span>}</div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{' '}
                        <Link to="/login">Sign in</Link>
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

export default SignUp