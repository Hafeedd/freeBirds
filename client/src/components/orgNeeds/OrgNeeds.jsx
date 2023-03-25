import React from 'react'
import { Form, Button ,Col, Row, Container, Card} from 'react-bootstrap';

const OrgNeeds = () => {
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
            
                    
                    <Form /* onSubmit={handleSubmit} */>
                        {/* email */}
                        <Form.Group className="mb-3">
                        <Form.Label className='text-center'>Org Email Address</Form.Label>
                        <Form.Control
                        
                        className='shadow border-0'
                            type='email'
                            placeholder='Enter email'
                            /* onChange={handleChange}  */name="email" 
                            required
                        />
                        </Form.Group>

                        {/* text area */}
                        <Form.Group className="mb-3">
                        <Form.Label className='text-center'>Needs of Childrens in organisation </Form.Label>
                        <Form.Control
                            className='shadow border-0'
                            as='textarea'
                            
                            rows={8}
                            /* onChange={handleChange} */ name="awareness"  
                            required
                        />
                        </Form.Group>

                        <Button type='submit' variant='danger' className=' me-0'>
                            submit
                        </Button>
                    </Form> {/* 
                    <div>{error && <span>{errorM}</span>}</div>  */}




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