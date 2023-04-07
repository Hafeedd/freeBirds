import Table from 'react-bootstrap/Table';
import { Col, /* Button, */ Row, Container, Card, Button} from "react-bootstrap";
import useFetch from '../../useFetch/usefetch';
import CryptoJS  from 'crypto-js';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ViewOrg = () => {

    const {user,key} = useContext(AuthContext) 
    if(user != null){
      const data = CryptoJS.AES.decrypt(user,key);
      var token = JSON.parse(data.toString(CryptoJS.enc.Utf8));
      if(token){
        var admin = token.type.isAdmin;
      }
    }
  
  const {datas,error,loading} = useFetch("http://localhost:8800/api/auth/getOrg/")

  const deleteUser = async (e,id) =>{
    const confirmBox = window.confirm(
        "Do you really want to delete this Organisation ?"
      )
      if (confirmBox === true) {

    await axios.delete(`http://localhost:8800/api/auth/deleteOrg/${id}`,{withCredentials: true});
    window.location.reload(true)
    }
  }



  
  return (
    <Container>
      <div className='text-center'><h2>Organisation list</h2></div>
    <Row className="vh-100  d-flex justify-content-center align-items-top border-2 border-danger">
      <Col md={8} lg="auto" xs={13}>
        {/* <div className="border border-2 border-danger"></div> */}
        <Card className="vw-75 shadow-lg border-5  border-white vh-75">
        {/* <div className="border border-2 border-danger"></div> */}
          <Card.Body>
                  <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Organisation Name</th>
                      <th>Phone number</th>
                      <th>Email</th>
                      <th>State</th>
                      <th>City</th>
                      {admin && <th>Delete</th>}
                      
                    </tr>
                  </thead>
                  {loading ? (
                    "Loading Please Wait..."
                    ) : (
                    <> 
                  {error.status === true &&
                        <tbody>
                        <tr>
                        <td colSpan={7} className="text-center">{error.message}</td>
                        
                        </tr>
                        </tbody>}
                    {error.status === false && datas.length === 0    &&
                        <tbody>
                        <tr>
                        <td colSpan={7} className="text-center">No Organisations added yet</td>
                        
                        </tr>
                        </tbody>}
                  {datas.map((datas,i)=>(
                  <tbody key={i} >
                    <tr>
                      <td>{i+1}</td>
                      <td>{datas.name}</td>
                      <td>{datas.phone}</td>
                      <td>{datas.email}</td>
                      <td>{datas.state}</td>
                      <td>{datas.district}</td>
                      {admin && <td><Button onClick={e => deleteUser(e,datas._id)} className='bg-danger border-danger shadow-sm'>Delete</Button></td>}
                    </tr>
                  </tbody>
                  ))}
                  </>)}
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     </Container>

  )
}

export default ViewOrg