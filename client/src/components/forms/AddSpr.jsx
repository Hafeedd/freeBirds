import axios from 'axios';
import CryptoJS  from 'crypto-js';
import React, { useContext, useState } from 'react'
import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const AddSpr = () => {

  var {user,key} = useContext(AuthContext);

  const [newSpnsr, setNewSpnsr] = useState({
    name: '',
    email:'',
    phone:'',
    District:'',
    State:'',
  });

  const navigate = useNavigate()

  const [error,setError] = useState(false);
  const [errorM,setErrorM] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = CryptoJS.AES.decrypt(user,key);
        const token = JSON.parse(data.toString(CryptoJS.enc.Utf8));
        const id = token.id
    try{
      const res = await axios.post(`http://localhost:8800/api/sponsor/${id}`,{
      name:newSpnsr.name,
      email:newSpnsr.email,
      phone:newSpnsr.phone,
      district:newSpnsr.District,
      state:newSpnsr.State,
      },{withCredentials: true})
      navigate(-1)
      console.log(res)

    }catch (err){
      console.log(err.response)
      setError(true)
      setErrorM(err.response.data.message)
    }
    
  }

  const handleChange = (e) => {
    setNewSpnsr({...newSpnsr, [e.target.name]: e.target.value});
  }


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
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="text-center">Name</Form.Label>
                      <Form.Control className='shadow border-0' type="text" placeholder="Enter sponsor's Name" 
                       onChange={handleChange} name="name" value={newSpnsr.name}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control className='shadow border-0' type="email" placeholder="Enter sponsor's email"  
                      onChange={handleChange} name="email" value={newSpnsr.email} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label className="text-center">
                        Phone Number
                      </Form.Label>
                      <Form.Control className='shadow border-0' type="tel" placeholder="Enter sponsor's phonenumber"  
                      onChange={handleChange} name="phone" value={newSpnsr.phone} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        State
                      </Form.Label>
                      <Form.Control className='shadow border-0' type="text" placeholder="Enter sponsor's state"  
                      onChange={handleChange} name="State" value={newSpnsr.State} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                       City
                      </Form.Label>
                      <Form.Control className='shadow border-0' type="text" placeholder="Enter sponsor's city" 
                      onChange={handleChange} name="District" value={newSpnsr.District} />
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
                  <div>{error && <span>{errorM}</span>}</div>
                    
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