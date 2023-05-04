
import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button ,Col, Row, Container, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Feedback() {

  const navigate = useNavigate()

  const [newFeedback , setFeedback] = useState({
    email: '',
    feedback:'',
  });

  const [error,setError] = useState(false);
  const [errorM,setErrorM] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:8800/api/feedback/',{
      email:newFeedback.email,
      feedback:newFeedback.feedback,
      })
      navigate("/feedbackRes")
    }catch (err){
      console.log(err.response.data)
      setError(true)
      setErrorM(err.response.data.message)
    }
    
  }

  const handleChange = (e) =>{
    setFeedback({...newFeedback,[e.target.name]:e.target.value})
  }
  

 	return (
  
	  <div>
      
      <Container>
      <Row className="vh-50 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="px-4 shadow-lg border-0 rounded-2 mb-3">
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
                          <h2 >Feedback</h2>
                 </div>
                <div className="mb-3">
   
		
          <Form onSubmit={handleSubmit}>
            {/* email */}
            <Form.Group className="mb-3">
              <Form.Label className='text-center'>Email Adress</Form.Label>
              <Form.Control
              
               className='shadow border-0'
                type='email'
                placeholder='Enter email'
                onChange={handleChange} name="email" value={newFeedback.email} 
                required
              />
            </Form.Group>

            {/* text area */}
            <Form.Group className="mb-3">
              <Form.Label className='text-center'>Description</Form.Label>
              <Form.Control
                className='shadow border-0'
                as='textarea'
                
                rows={3}
                onChange={handleChange} name="feedback" value={newFeedback.feedback} 
                required
              />
            </Form.Group>

            <Button type='submit' variant='danger'>submit</Button>
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
	);
}

export default Feedback;