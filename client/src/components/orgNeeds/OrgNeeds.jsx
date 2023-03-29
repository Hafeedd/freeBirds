import CryptoJS  from 'crypto-js';
import axios from 'axios';
import React, {useContext, useState } from 'react';
import { Form, Button ,Col, Row, Container, Card} from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const OrgNeeds = () => {

    const navigate = useNavigate();

    var key = 'gzLxc16cnBhScdScGijOEXdAyv2XkgR5TRqYPK5FH7Q='
    var {user} = useContext(AuthContext);

    const [newNeeds , setNeeds] = useState({
        service:'',
        details:'',
      });
    
      const [error,setError] = useState(false);
      const [errorM,setErrorM] = useState(undefined);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        var data = CryptoJS.AES.decrypt(user,key);
        const token = JSON.parse(data.toString(CryptoJS.enc.Utf8));
        const id = token.id
        try{
          const res = await axios.post(`http://localhost:8800/api/service/${id}`,{
          service:newNeeds.service,
          details:newNeeds.details,
          },{withCredentials: true})
          navigate(-1)
          console.log(res)
        }catch (err){
          console.log(err.response.data)
          setError(true)
          setErrorM(err.response.data.message)
        }
        
      }
    
      const handleChange = (e) =>{
        setNeeds({...newNeeds,[e.target.name]:e.target.value})
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
                                    <h2 >Needs</h2>
                            </div>
                            <div className="mb-3">
            
                    
                    <Form onSubmit={handleSubmit}>
                        {/* email */}
                        <Form.Group className="mb-3">
                        <Form.Label className='text-center'>Service</Form.Label>
                        <Form.Control
                        
                        className='shadow border-0'
                            type='service'
                            placeholder='Enter service'
                            onChange={handleChange} name="service" value={newNeeds.service}
                            required
                        />
                        </Form.Group>

                        {/* text area */}
                        <Form.Group className="mb-3">
                        <Form.Label className='text-center'>Needs of organisation </Form.Label>
                        <Form.Control
                            className='shadow border-0'
                            as='textarea'
                            rows={8}
                            onChange={handleChange} name="details"  value={newNeeds.details}
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
  )
}

export default OrgNeeds