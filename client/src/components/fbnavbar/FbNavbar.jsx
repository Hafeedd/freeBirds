import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';
import logo from "./fblogo.jpg"
// import SearchMc from "./pages/searchchild/SearchMC";
/* import fblogo from "/fblogo.jpg"
import logo from ".../images/fblogo.jpg" */
/* import SignUp from '../../pages/signup/SignUp'; */


const FbNavbar = ({type}) => {
  const navigate = useNavigate();
  /* const signup="signup";
  const login="login";
 */

  const logout = async () =>{
      console.log("loging out")
      await axios.get('http://localhost:8800/api/auth/logout',{withCredentials:true})
      .then(res => {
        console.log(res)
        localStorage.removeItem("user")
        navigate("/")
      }).catch(err =>{
        console.log(err)
      })
  }




  return (
    <>
 
        
         {/* type!== "login"&& type!== "signup"  */}
    <Navbar  expand="lg" className='  bg-opacity-50 bg-black text-white fixed-top' variant="dark" bg="dark">
      <Container fluid>
      
      <Navbar.Brand>
            <img
             onClick={() => navigate("/")}
              alt="fblogo"
              src={logo}
               width="130px"
              height="40px" 
              className=" fixed-top d-inline-block rounded-2 align-top mt-1 pt-1 position-static"
              
            />
          </Navbar.Brand> 
 { (type!== "login"&&type!== "signup")&&type!== "donationch" && <div className="justify-content-end ">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="me-auto  my-3  my-lg-0 p-1 h" 
            style={{ maxHeight: '100px',maxWidth:'400px' }}
            navbarScroll
          >{/* 
            <Nav.Link className='text-white' onClick={() => navigate("/")}>Home</Nav.Link> */}
           
            <Nav.Link className='text-white' onClick={() => navigate("/aboutUs")}>About Us</Nav.Link>
            {/* <NavDropdown
              id="nav-dropdown-dark-example"
              title="Missing child"
              variant="dark"
              menuVariant="dark" 
              style={{ color: 'rgb(245, 245, 245)' }}>
              
              <NavDropdown.Item onClick={() => navigate("/SearchMc")} >View</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/SearchMc")}>Add</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/login")}>
              Case status
              </NavDropdown.Item>
            </NavDropdown> */}
            { type === "home"  &&
            <Nav.Link className='text-white' onClick={() => navigate("/signup")}>Sign up</Nav.Link>           
                   }
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            { (type!== "admin" && type!== "user")&&type!== "org" ? <Button 
                onClick={() => navigate("/login")}
                variant="danger" 
                className='m-2 rounded-4' 
                style={{ background: 'linear-gradient(to right, rgb(255, 94, 126), rgba(201, 32, 66))' }}>
              Log in</Button>
              :    
            <Button 
                onClick={logout}
                variant="danger" 
                className='m-2 rounded-4' 
                style={{ background: 'linear-gradient(to right, rgb(255, 94, 126), rgba(201, 32, 66))' }}>
              Log out</Button>}
    
            <Button onClick={() => navigate("/donation/")} className='rounded-4' variant="danger" style={{ background: 'linear-gradient(to right, rgb(255, 94, 126), rgba(201, 32, 66))' }}>
              Donate</Button>
    
        </Navbar.Collapse>
        </div>
        }

      </Container>
    </Navbar>

    </>
  )
}

export default FbNavbar 