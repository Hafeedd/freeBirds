// import axios from 'axios';
import React from 'react'
import {  Row, Container, Card, Table } from "react-bootstrap";
import useFetch from '../../useFetch/usefetch.js';

const MCList = () => {

    const {datas,error,loading} = useFetch("http://localhost:8800/api/missingChild/")
    console.log(datas)

    // const changeStatus = async (e,id) =>{
    //   console.log(e)
    //   const res = await axios.post(`http://localhost:8800/api/auth/deleteUser/${id}`);
    //   console.log(res);
    // }


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
                      <th>Child image</th>
                      <th>name</th>
                      <th>missig place</th>
                      <th>contact no</th>
                      <th>case status</th>
                      
                    </tr>
                  </thead>

                  {loading ? (
                    "Loading please wait..."
                  ) : (
                    <> {datas.map((datas,i)=>(
                    <tbody key={datas._id}>
                    <tr>
                      <td>{i}</td>
                      <td> <img 
                      alt='img'
                      src={datas.photo}
                      width="70px"
                      height="70px" 
                      className="  shadow-sm rounded-4 align-self-center "/>
                      </td>
                      <td>{datas.name}</td>
                      <td>{datas.state}{","}{datas.city}</td>
                      <td>{datas.phoneno}</td>
                      {datas.status === false && <td>{"not found"}</td>}
                      {datas.status === true && <td>{"found"}</td>}
                     
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

export default MCList