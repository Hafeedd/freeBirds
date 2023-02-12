

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const FbNavbar = () => {
  return (
    <>
  <style type="text/css">{`
        Navbar{
          background-color:#fff;
        }
        #navbarScrollingDropdown{
          text-color:white;
          
        }}
        `}
         </style>
    {/*  <style type="text/css">
        {`
             .btn-flat {
                     background-color: #ff3d3d;
                       color: white;
                      }
              .btn-xxl {
                padding: 5px 10px;
                font-size: 1.2rem;
                border-radius:8px;
              
              }
        `}
      </style>

     <Navbar bg="dark" variant="dark">
        <Container className='justify-content-end'>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#ChildMissing">Child Missing</Nav.Link>
            <Button variant="flat" size="xxl">Donate</Button>{' '}
           
          </Nav>
        </Container>
      </Navbar>
     */}  
    <Navbar  expand="lg" className=' bg-black text-white'variant="dark" bg="dark">
      <Container fluid>
      
      <Navbar.Brand>
            <img
              alt="fblogo"
              src="fblogo.jpg"
               width="130px"
              height="40px" 
              className="d-inline-block align-top mt-1 pt-1 position-static"
              
            />
          </Navbar.Brand> 
  <div className="justify-content-end ">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 p-1" 
            style={{ maxHeight: '100px',maxWidth:'300px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-white' href="#action2">About Us</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Missing child"
              variant="dark"
              menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">View</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Add</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Case status
              </NavDropdown.Item>
            </NavDropdown>
                
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="danger">Donate</Button>
    
        </Navbar.Collapse>
        </div>

      </Container>
    </Navbar>

    </>
  )
}

export default FbNavbar