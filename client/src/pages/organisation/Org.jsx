import React from 'react'
import FbNavbar from '../../components/fbnavbar/FbNavbar'
import { FaHandHoldingHeart ,FaHandHoldingUsd,FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Org = () => {

  const navigate=useNavigate();
  return (
    <>
    
    <FbNavbar type="org"/>
    <div id="features" className="text-center mt-5">
      <div className="container">
        <br/>
        
       {/* <div className=" ps-5 ] pe-0 text-center align-content-end col-md-10 col-md-offset-1 section-title pt-5 ">
          <h2 className=" fa-shake">Admin panel</h2>
        </div>  */}
        <h2 className="text-black-50">Organisation panel</h2>
        <br/>
       {/*  <Chart/> */}
        <div className=" row justify-content-center ms-2 me-2 text-black pt-2 justify-content-around">
              
                <div onClick={() => navigate("/postAwareness/")}  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 text-black z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingHeart/></i>
                  <h3>Awarness</h3>
                  <p>Post Awarness for people</p>
                </div>
                <div onClick={() => navigate("/addspsr/")}  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-2">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Add sponsor</h3>
                  <p>help to find missing child</p>
                </div>
                <div onClick={() => navigate("/viewSpsr/")} className="shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-1">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3> View Sponsers</h3>
                  <p>view and manage sponsors</p>
                </div>
        </div>
        <br/>
        <div className=" row justify-content-center ms-2 me-2 text-black justify-content-around pt-2">
          
                <div onClick={() => navigate("/feedback")}   className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 text-black z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingHeart/></i>
                  <h3>Feedback</h3>
                  <p>Share feedback for our team</p>
                </div>
                <div onClick={() => navigate("/McList/")} className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-2">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Missing child details</h3>
                  <p>help to find missing child</p>
                </div>
                <div onClick={() => navigate("/OrgNeeds/")} className="shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingUsd/></i>
                  <h3>Needs</h3>
                  <p>Post organisational needs from people</p>
                </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Org