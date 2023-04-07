import React from 'react'

import {  Row, Container, Card} from 'react-bootstrap';
import useFetch from '../../useFetch/usefetch';

const ViewAwns = () => {

  const {datas , error, loading} = useFetch("http://localhost:8800/api/awarness/")
console.log(error.message)
  return (
    
    <Container className=''>
        <div className='shadow vw-1oo mt-2 d-flex justify-content-center text-danger'><h1>Awareness</h1></div>
           
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
                        <h3>No Datas Found</h3>
          </Card.Body>
        </Card>

        </>}
      {datas && datas.map((datas,i)=>(
          <Card key={i} className="px-4 shadow-lg border-0 rounded-2 mb-3">
          <Card.Body>
                      
                        <h3 >{datas?.orgName}</h3>
                    
                        <Card.Title as="h6" variant="grey">{datas?.orgState}{" "}{datas?.orgCity} </Card.Title>
                    <div className='ms-4'>
                        <Card.Text>
                           {datas?.awareness}
                        </Card.Text>
                    <div className="text-center">{error === true && <span>{"Something went wrong"}</span>}</div>
                    </div>
          </Card.Body>
        </Card>
        ))}
        </>)}
      
    </Row>
  </Container>
        

  )
    

}

export default ViewAwns