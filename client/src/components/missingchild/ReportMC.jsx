import React from 'react'

import axios from 'axios';
import { useState } from 'react';
import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";




const ReportMC = () => {

  const [newChild , setNewChild] = useState({
    name: '',
    age:'',
    image:'',
    state:'',
    city:'',
    appearance:'',

  });

  const navigate = useNavigate()

 /*  const [error,setError] = useState(false);
  const [errorM,setErrorM] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:8800/api/auth/registerchild',{
      name:newUser.name,
      email:newUser.email,
      phone:newUser.phone,
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
*/
  const handleChange = (e) => {
    setNewChild({...newChild, [e.target.name]: e.target.value});
  }

 
 
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4 shadow border-0">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                <img 
                      alt='img'
                      src='images/fblogo-rd.jpg'
                      width="50px"
                      height="50px" 
                      className="   shadow-sm rounded-circle align-self-center mt-0 mb-4  "
                  /> <h3 className='text-danger d-flex justify-content-center'>Register Missing Child</h3>
                  
                  <div className="mb-3">
                    <Form /* onSubmit={handleSubmit} */>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter child Name" className='shadow border-0'
                        onChange={handleChange} name="name" value={newChild.name} />
                      </Form.Group>


                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Photo of child
                        </Form.Label>
                            <Form.Control   type="file" 
                                            placeholder='upload the photo of Missing child'
                                            accept=".jpeg, .png, .jpg"
                                            name="photo"
                                            className='shadow border-0 bg-grey'
                                            /* onChange={handleFileUpload} *//>
                      </Form.Group>



                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          Age
                        </Form.Label>
                        <Form.Control type="tel"  className='shadow border-0' placeholder="Enter age of child" 
                        onChange={handleChange} name="phone" value={newChild.age}/>
                      </Form.Group>
                      

                      
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          State
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter State" className='shadow border-0'
                        onChange={handleChange} name="state" value={newChild.state}/>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" >
                        <Form.Label className="text-center">
                          City
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter city" className='shadow border-0'
                        onChange={handleChange} name="city" value={newChild.city}/>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label className='text-center'>Apperance</Form.Label>
                          <Form.Control
                            className='shadow border-0'
                            as='textarea'
                            placeholder='appearance such as skin color ,dress color and height etc'
                            rows={3}
                            onChange={handleChange} name="feedback" value={newChild.appearance} 
                            
                          />
                        </Form.Group>



                    
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                      <input className="bg-danger rounded-2 border-danger text-white"
                      type="submit" value="Submit"
  />
                       {/*  <Button variant="primary" type="submit" onClick={handlesubmit()}>
                          Create Account
                        </Button> */}
                      </div>
                    </Form>
                    {/* 
                    <div>{error && <span>{errorM}</span>}</div> */}
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already reported?{' '}
                        <Link to="/searchMc/">search</Link>
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

export default ReportMC