import React from 'react'
import {  Row, Container, Card} from 'react-bootstrap';
import useFetch from '../../useFetch/usefetch';

const ViewNeeds = () => {

  const {datas,error,loading} = useFetch("http://localhost:8800/api/service/")

  return (
    <div>
         <Container className=''>
        <div className='shadow vw-1oo mt-2 d-flex justify-content-center text-danger'><h1>Needs of Organisation</h1></div>
           
    <Row className="mt-5 vh-50 d-flex justify-content-center align-items-center">
    {loading?("loading"):(<>
        {error.status === true && <>
            <Card className="px-4 shadow-lg border-0 rounded-2 mb-3 text-center">
            <Card.Body>
                          <h3 >{error.message}</h3>
            </Card.Body>
          </Card>
          </>}
        {error === false && datas.length === 0 && <>
          <Card className="px-4 shadow-lg border-0 rounded-2 mb-3 text-center">
          <Card.Body>
                        <h3 >No Datas Found</h3>
          </Card.Body>
        </Card>

        </>}
      {datas && datas.map((datas,i)=>(
        <Card key={i} className="px-4 shadow-lg border-0 rounded-2 mb-3">
          <Card.Body>
                      
                        <h3 >{datas?.orgName}</h3>
                    
                        <Card.Title as="h6" variant="grey">{datas?.orgState}{" "}{datas?.orgCity}</Card.Title>
                        <Card.Title as="h6" variant="grey">Service:{"  "}{datas?.service}</Card.Title>
                    <div className='ms-4'>
                        <Card.Text>
                        {datas?.details}
                        </Card.Text>
                    </div>
            
          </Card.Body>
        </Card>
        ))}
        </>)}
      
    </Row>
  </Container>
        

    </div>
  )
}

export default ViewNeeds