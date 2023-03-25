import React/* , { useState } */ from 'react'
import Table from 'react-bootstrap/Table';
import { Col, /* Button, */ Row, Container, Card, Button} from "react-bootstrap";
// import axios from 'axios';
import useFetch from '../../useFetch/usefetch';
import axios from 'axios';

const ViewUser = () => {
  
  const {datas,error,loading} = useFetch("http://localhost:8800/api/auth/getUser/")

  const deleteUser = async (e,id) =>{

    const res = await axios.delete(`http://localhost:8800/api/auth/deleteUser/${id}`,{withCredentials: true});
    console.log(res);
    window.location.reload(true)
  }



  
  return (
    <Container>
    <Row className="vh-100  d-flex justify-content-center align-items-top border-2 border-danger">
      <Col md={8} lg={6} xs={12}>
        {/* <div className="border border-2 border-danger"></div> */}
        <Card className="vw-75 shadow-lg border-5  border-white vh-75">
        {/* <div className="border border-2 border-danger"></div> */}
          <Card.Body>
                  <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>User Name</th>
                      <th>Phone number</th>
                      <th>state</th>
                      <th>city</th>
                      <th>delete</th>
                      
                    </tr>
                  </thead>
                  {loading ? (
                    "Loading Please Wait..."
                    ) : (
                    <> {datas.map((datas,i)=>(
                  <tbody key={i} >
                    <tr>
                      <td>{i+1}</td>
                      <td>{datas.name}</td>
                      <td>{datas.phone}</td>
                      <td>{datas.state}</td>
                      <td>{datas.district}</td>
                      <td><Button onClick={e => deleteUser(e,datas._id)} className='bg-danger border-danger shadow-sm'>Delete</Button></td>
                    </tr>
                  </tbody>
                  ))}
                  </>)}
                </Table>
                <div className="text-center">{error && <span>{error.message}</span>}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     </Container>

  )
}

export default ViewUser