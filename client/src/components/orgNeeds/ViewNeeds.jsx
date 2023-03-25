import React from 'react'
import {  Row, Container, Card} from 'react-bootstrap';

const ViewNeeds = () => {
  return (
    <div>
         <Container className=''>
        <div className='shadow vw-1oo mt-2 d-flex justify-content-center text-danger'><h1>Needs of Organisation</h1></div>
           
    <Row className="mt-5 vh-50 d-flex justify-content-center align-items-center">
      {/* map this */}
        <Card className="px-4 shadow-lg border-0 rounded-2 mb-3">
          <Card.Body>
                      
                        <h3 >Calicut orphange</h3>
                    
                        <Card.Title as="h6" variant="grey">calicut,kerala </Card.Title> {/* here the org.city  and Org.state shown */}
                    <div className='ms-4'>
                        <Card.Text>
                           " note books -50,
                             pencils -50,
                             cloths -30,
                             SSLC textbooks -45 set"

                        </Card.Text>
                    </div>
            
          </Card.Body>
        </Card>
      
    </Row>
  </Container>
        

    </div>
  )
}

export default ViewNeeds