import React, { useState } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Users = () => {

  const [newRes, setNewRes] = useState({
    photo: "",
    details: null,
  })
  const [newUser, setNewUser] = useState(
        {
            photo: '',
        }
    );

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        console.log("in axios")
        await axios.post('http://localhost:8800/api/searchMC/',{
          photo: newUser.photo,
        },{withCredentials: true}).then(async res =>{
          console.log("in if")
          if(!res.data.FaceId){
            console.log(res.data)
            setNewRes({photo:res.data,details:null})
          }
          const data = await axios.get(`http://localhost:8800/api/missingChild/faceid/${res.data}`,{withCredentials: true})
          console.log(data)
          setNewRes({photo:data.data.photo , details:data.data})

      });
      }
    catch(err){
      console.log(err)
    }
  }

   const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const handleFileUpload = async (e) => {
        let base64 = ""
        const file = e.target.files[0];
        base64 = await convertToBase64(file);
        setNewUser({...newUser, photo: base64 });
    }


    // test object
  /* const s={
    name:"nawaf",
    age:"10",
    gender:"male",
    Missing_Location:"calicut beach",
    mc_image:'https://im.rediff.com/news/2010/sep/9velloreboy.jpg',
  }

  const f={
    name:"nawaf",
    age:"11",
    gender:"male",
    viewed_Location:"calicut cafeteria",
    mc_image:'https://im.rediff.com/news/2010/sep/9velloreboy.jpg',
  } */

    return (
        <div>
           <Container>
        <Row className="vh-70 d-flex justify-content-center mt-5 align-items-top border-2 border-white">
          <Col style={{ height: '18rem' }} md={8} lg={6} xs={6}>
            
            <Card className=" shadow-lg border-5 border-top border-white">
          
              <Card.Body>
                <div className="mb-3 mt-md-4  align-items-center">
                <h5 className="pe-5 align-center">Search Missing Child</h5>

                  <div className="mb-3">
                    <Form className="contact-form"  onSubmit={handleSubmit} encType='multipart/form-data'>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          photo of child
                        </Form.Label>
                            <Form.Control   type="file" 
                                            placeholder='upload the photo of child'
                                            accept=".jpeg, .png, .jpg"
                                            name="photo"
                                            onChange={handleFileUpload}/>
                      </Form.Group>
                      <div>
            
            </div>

                      <div className="d-grid">
                        <Button variant="danger" type="submit">
                          search
                        </Button>
                      </div>
                      <br></br>
                      {/* <div className="d-grid">
                        <Button variant="danger" onClick={uploadSearchChild}>
                          Upload the image for continous check
                        </Button>
                      </div> */}          
                    </Form>
                    {/* <div>{error && <span>{error.message}</span>}</div> */} {/* to show "can't find message" when couldn't find missing child */} 
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
         </Row> 
     </Container>
<br></br>
      <Container  className="d-grid">
{/* 
      searching child details */}
      <Row className='ms-3 align-content-between justify-content-between'>
      <Card style={{ width: '18rem' }} className="shadow">
      <Card.Title>Searching image</Card.Title>
      <Card.Img variant="top" className='mt-2 mb-2' src={newUser.photo} />
    </Card>

    {/* finded match */}
      <Card style={{ width: '18rem' }}>
      <Card.Title>Found image</Card.Title>
      <Card.Img variant="top" className='mt-2' src={newRes.photo} />
      <Card.Body >
        {(newRes.details !== null)?(<Card.Text>
          <h5>Name :{newRes.details.name}</h5>
          <h5>Age :{newRes.details.age}</h5>
          <h5>Gender :{newRes.details.gender}</h5>
          <h5>Found location :{newRes.details.state},{newRes.details.city}</h5>
        </Card.Text>
        ):(<Card.Text>
          <h5>click the search button</h5>
        </Card.Text>)
        }
      </Card.Body>
    </Card>

      </Row>
      </Container>
        
	  
        
         </div>
        
    );
}

export default Users;