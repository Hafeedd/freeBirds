// import axios from 'axios';
import React, { useContext } from 'react'
import {  Row, Container, Card, Table, Button } from "react-bootstrap";
import useFetch from '../../useFetch/usefetch.js';
import axios from 'axios';
import CryptoJS  from 'crypto-js';
import { AuthContext } from '../../context/AuthContext.js';

const MCList = () => {

    const {datas,error,loading} = useFetch("http://localhost:8800/api/missingChild/")
    var dat
    const {user,key} = useContext(AuthContext) 
    if(user != null){
      const data = CryptoJS.AES.decrypt(user,key);
      var token = JSON.parse(data.toString(CryptoJS.enc.Utf8));
      var id = token.id 
    }
    
    const setTheData = (datas) =>{
      for (const doc of datas){
        if(doc.u_id === id){
        dat = true;}
      }
    }

    setTheData(datas)
    
    const changeStatus = async (e,id,status) =>{
      if(status === false){
        status = true;
      }else{
        status = false
      }
      const confirmBox = window.confirm(
        "Do you really want to update the status of child ?"
      )
      if (confirmBox === true) {
      await axios.put(`http://localhost:8800/api/missingChild/${id}`,{status},{withCredentials: true});
      window.location.reload(true)
      }
    }


  return (
    <div /* onLoad={window.history.go(2)} */>
         <Container>
            <div className='text-center'><h2>Missing Child list</h2></div>
            
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
                      {dat &&<th>update status</th>}
                      
                    </tr>
                  </thead>

                  {loading ? (
                    "Loading please wait..."
                  ) : (
                    <> {error.status === true &&
                      <tbody>
                      <tr>
                      <td colSpan={6} className="text-center">{error.message}</td>
                      
                      </tr>
                      </tbody>}
                     {error.status === false && datas.length === 0 &&
                      <tbody>
                      <tr>
                      <td colSpan={6} className="text-center">No datas found</td>
                      
                      </tr>
                      </tbody>}
                      {datas.map((datas,i)=>(
                    <tbody key={datas._id}>
                    <tr>
                      <td>{i+1}</td>
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
                      {datas.u_id !== id && dat && <td>{" "}</td>}
                      {datas.u_id === id && <td className='text-center'><Button onClick={e => changeStatus(e,datas._id,datas.status)} className='bg-danger border-danger shadow-sm'>Update</Button></td>}
                     
                    </tr>
                  </tbody>
                  ))}
                  </>)}
                
                  
                </Table>
              </Card.Body>
            </Card>
          
        </Row>
     </Container>

    </div>


  )
}

export default MCList