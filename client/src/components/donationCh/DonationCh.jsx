import React from 'react'
import {FaBookOpen,FaCcApplePay, FaGooglePay, FaGraduationCap,FaHandHoldingUsd,FaPen} from 'react-icons/fa';

import {MdFastfood ,MdOutlineFastfood} from "react-icons/md";

import { GiClothes } from "react-icons/gi";
import FbNavbar from '../fbnavbar/FbNavbar';
import { useNavigate } from 'react-router-dom';

const DonationCh = () => {
 
  const navigate = useNavigate();

  const org = {
    id: "89077",
    name: "calicut orphonage",
  
  }
  const styles = {
    color: "black",
    fontSize: "50px"
  }
  const smStyle = {
    color: "#DC3545",
    fontSize: "30px"
  }
  return (
    <>
      <FbNavbar type="donationch"/>  

   
    <div id="features" className="text-center mt-5">

    <div className="container">
      <br/>
      
     {/* <div className=" ps-5 ] pe-0 text-center align-content-end col-md-10 col-md-offset-1 section-title pt-5 ">
        <h2 className=" fa-shake">Admin panel</h2>
      </div>  */}
      <h3 className='text-black'> Donation to {org.name}</h3>
      <br/>
      <h4 className="text-black-50">Choose your donation method</h4>
      <br/>
      
      <div className=" row justify-content-center text-black justify-content-between pt-5 gap-2">
            
              <div  className=" shadow col-xs-6 col-md-3 justify-content-between bg-white rounded-3 p-4 text-black z-index-1">
                {" "}
                <i ><FaHandHoldingUsd style={styles}/></i>
                <h3>Monetary</h3>
                <p>Payment options</p>
                <><a href='https://pay.google.com/'><i /* onClick={() => navigate("https://pay.google.com/")} */ className=""><FaGooglePay style={smStyle}/></i></a></>
                <br />
                <i className=""><FaCcApplePay style={smStyle}/></i>
                
                
              </div>
              <div  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-2">
                {" "}
                <i ><FaGraduationCap  style={styles}/></i>
                <h3>Educational</h3>
                <p>Help for educational needs</p>
                <i className=""><FaBookOpen style={smStyle}/></i><br/><br/>
                <i className=""><FaPen style={smStyle}/></i>
              </div>
              <div  className="shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-1">
                {" "}
                <i ><MdFastfood style={styles}/></i>
                <h3>Other</h3>
                <p>help for living needs</p>
                <i className="w-20"><MdOutlineFastfood style={smStyle}/></i><br/><br/>
                <i className="w-20"><GiClothes style={smStyle}/></i>
              </div>
      </div>
      <br/>
   
    </div>
  </div>
</>
   /*  <Container className=" d-lg-grid">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top"  src='images/img2.jpg' />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Container> */
  )
   
  
}

export default DonationCh;