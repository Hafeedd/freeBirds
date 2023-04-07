import CryptoJS  from 'crypto-js';
import axios from 'axios';
import React, {useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { Form, Button ,Col, Row, Container, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const PostAwns = () => {

    const navigate = useNavigate();

    var {user,key} = useContext(AuthContext);

    const [newAwareness , setAwareness] = useState({
        awareness:'',
      });
    
      const [error,setError] = useState(false);
      const [errorM,setErrorM] = useState(undefined);
    
      const HandleSubmit = async (e) => {
        e.preventDefault();
        var data = CryptoJS.AES.decrypt(user,key);
        const token = JSON.parse(data.toString(CryptoJS.enc.Utf8));
        const id = token.id
        try{
          await axios.post(`http://localhost:8800/api/awarness/${id}`,{
          orgNmae:newAwareness.orgNmae,
          awareness:newAwareness.awareness,
          },{withCredentials: true})
          navigate("/organisation")
    
        }catch (err){
          console.log(err.response.data)
          setError(true)
          setErrorM(err.response.data.message)
        }
        
      }
    
      const handleChange = (e) =>{
        setAwareness({...newAwareness,[e.target.name]:e.target.value})
      }
     

  return (
    <div>

            <Container>
                <Row className="vh-50 d-flex justify-content-center align-items-center pt-5">
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
                                    <h2 >Awareness</h2>
                            </div>
                            <div className="mb-3">
            
                    
                    <Form onSubmit={HandleSubmit}>
                        {/* orgNmae */}
                        {/* <Form.Group className="mb-3">
                        <Form.Label className='text-center'>Email Address</Form.Label>
                        <Form.Control
                        
                        className='shadow border-0'
                            type='email'
                            placeholder='Enter orgNmae'
                            onChange={handleChange} name="orgNmae" value={newAwareness.orgNmae}
                            required
                        />
                        </Form.Group> */}

                        {/* text area */}
                        <Form.Group className="mb-3">
                        <Form.Label className='text-center'>Awareness message</Form.Label>
                        <Form.Control
                            className='shadow border-0'
                            as='textarea'
                            
                            rows={8}
                            onChange={handleChange} name="awareness" value={newAwareness.awareness} 
                            required
                        />
                        </Form.Group>

                        <Button type='submit' variant='danger' className=' me-0'>
                            submit
                        </Button>
                    </Form> {
                    <div>{error && <span>{errorM}</span>}</div> }




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


    

export default PostAwns