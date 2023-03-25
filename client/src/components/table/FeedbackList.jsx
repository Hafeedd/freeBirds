import axios from 'axios';
import React from 'react'
import {  Row, Container, Card, Button ,Table} from "react-bootstrap";
import useFetch from '../../useFetch/usefetch';

const FeedbackList = () => {
    
  const {datas,error,loading} = useFetch("http://localhost:8800/api/feedback/")
  console.log(datas)

  const deleteFeedback = async (e,id) =>{

      const res = await axios.delete(`http://localhost:8800/api/feedback/${id}`,{withCredentials: true});
      console.log(res)
      window.location.reload(true)
  }

  return (
    <div>
         <Container>
            <div className='text-center'><h2>feedback list</h2></div>
            
    <Row className="vh-100  d-flex justify-content-center align-items-top border-2 border-danger">
      
        {/* <div className="border border-2 border-danger"></div> */}
        <Card className="vw-75 shadow-lg border-5  border-white vh-75">
        {/* <div className="border border-2 border-danger"></div> */}
          <Card.Body>
                  <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Email</th>
                      <th>feedback</th>
                      <th>delete</th>
                      
                    </tr>
                  </thead>
                  

                  {loading ? (
                    "Loading please wait..."
                  ) : (<>
                  {datas.length === 0    &&
                    <tbody>
                    <tr>
                    <td colSpan={4} className="text-center">No datas found</td>
                    
                    </tr>
                    </tbody>}
                  {datas.map((datas,i)=>(
                    <tbody key={i}>
                    <tr>
                      <td>{i+1}</td>
                      <td>{datas?.email}</td>
                      <td>{datas?.feedback}</td>
                      <td><Button onClick={e => deleteFeedback(e,datas._id)} className='bg-danger border-danger shadow-sm'>Delete</Button></td>
                    </tr>     
                  </tbody>
                  ))}
                  </>)}
                </Table>
                <div className="text-center">{error && <span>{error.message}</span>}</div>
              </Card.Body>
            </Card>
          
        </Row>
     </Container>

    </div>
  )
}

export default FeedbackList