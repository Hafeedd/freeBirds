import React, { useContext } from 'react'
import CryptoJS  from 'crypto-js';
import axios from 'axios';
import { useState } from 'react';
import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';




const ReportMC = () => {

  var {user,key} = useContext(AuthContext);

  const [newChild , setNewChild] = useState({
    name: '',
    photo:'',
    age:'',
    image:'',
    state:'',
    city:'',
    appearance:'',

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
      const res = await axios.post(`http://localhost:8800/api/missingChild/${id}`,{
        name: newChild.name,
        photo:newChild.photo,
        age:newChild.age,
        image:newChild.image,
        state:newChild.state,
        city:newChild.city,
        appearance:newChild.appearance,
      },{withCredentials:true})
      navigate(-1)
      console.log(res)

    }catch (err){
      console.log(err.response.data)
      setError(true)
      setErrorM(err.response.data.message)
    }
    
  }


  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
      let base64 = ""
      const file = e.target.files[0];
      base64 = await convertToBase64(file);
      setNewChild({...newChild, photo: base64 });
  }

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
               {/*  <img 
                      alt='img'
                      src='images/fblogo-rd.jpg'
                      width="50px"
                      height="50px" 
                      className="   shadow-sm rounded-circle align-self-center mt-0 mb-4  "
                  /> */} <h3 className='text-danger d-flex justify-content-center'>Register Missing Child</h3>
                  
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
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
                                            onChange={handleFileUpload}/>
                      </Form.Group>
                    

                      <Form.Group className="mb-3" >
                        <Form.Label className="text-center">
                          Age
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter age" className='shadow border-0'
                        onChange={handleChange} name="age" value={newChild.age}/>
                      </Form.Group>
                      


                      {/* <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="text-center">
                          Age
                        </Form.Label>
                        <Form.Control type="text"  className='shadow border-0' placeholder="Enter age of child" 
                        onChange={handleChange} name="phone" value={newChild.age}/>
                      </Form.Group>
                       */}

                      
                      <Form.Group className="mb-3" >
                        <Form.Label className="text-center">
                          State
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter State" className='shadow border-0'
                        onChange={handleChange} name="state" value={newChild.state}/>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" >
                        <Form.Label className="text-center">
                          City
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter city" className='shadow border-0'
                        onChange={handleChange} name="city" value={newChild.city}/>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label className='text-center'>Apperance</Form.Label>
                          <Form.Control
                            className='shadow border-0'
                            as='textarea'
                            placeholder='appearance such as skin color ,dress color etc'
                            rows={3}
                            onChange={handleChange} name="appearance" value={newChild.appearance} 
                            
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
                    </Form>{
                    <div>{error && <span>{errorM}</span>}</div>}
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