import React,{ useState } from 'react';
import axios from "axios";
import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";



const Addorg = () => {

  const [newOrg , setNewOrg] = useState({
    name: '',
    email:'',
    phone:'',
    District:'',
    State:'',
    password:'',

  });

  const navigate = useNavigate()

  const [error,setError] = useState(false);
  const [errorM,setErrorM] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:8800/api/auth/registerOrg',{
      name:newOrg.name,
      email:newOrg.email,
      phone:newOrg.phone,
      district:newOrg.District,
      state:newOrg.State,
      password:newOrg.password,
      },{withCredentials: true})
      navigate("/login")
      console.log(res)

    }catch (err){
      console.log(err.response)
      setError(true)
      setErrorM(err.response.data.message)
    }
    
  }

  const handleChange = (e) => {
    setNewOrg({...newOrg, [e.target.name]: e.target.value});
  }

  return (
    <>
       <Container>
        <Row className="  vh-100 d-flex justify-content-center align-items-center border-2 border-primary pt-5 ">
          <Col md={8} lg={6} xs={12}>
          
            <Card className="shadow-lg border-4 border-danger mb-mt-0 rounded-4 border-top pb-2">

              <Card.Body>
                <div className="mb-0 mt-md-3">
                <img 
                      alt='img'
                      src='images/fblogo-rd.jpg'
                      width="40px"
                      height="40px" 
                      className="  shadow-lg rounded-circle align-self-center mt-0 mb-4 border-3 border-danger  "
                  />
                  
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name of org</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" 
                        onChange={handleChange} name="name" value={newOrg.name} />
                      </Form.Group>

                      

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        onChange={handleChange} name="email" value={newOrg.email} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          Phone number
                        </Form.Label>
                        <Form.Control type="tel" placeholder="Enter phone number having upi" 
                        onChange={handleChange} name="phone" value={newOrg.phone} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                         State
                        </Form.Label>
                        <Form.Control type="text-field" placeholder="Enter the name of  state " 
                        onChange={handleChange} name="State" value={newOrg.State} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                         City
                        </Form.Label>
                        <Form.Control type="text-field" placeholder="Enter the name of district "
                        onChange={handleChange} name="District" value={newOrg.District}  />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        onChange={handleChange} name="password" value={newOrg.password} />
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword1"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group> */}
                      {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group> */}
                      <div className="d-grid">
                      <input className="bg-danger rounded-2 border-danger text-white"
                      type="submit" value="Create Account for organisation"
                     />
                        {/* <Button variant="danger" type="submit">
                          Create Account for organisation
                        </Button> */}
                      </div>                        
                    </Form>
                    <div>{error && <span>{errorM}</span>}</div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
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
    </>
  )
}

export default Addorg