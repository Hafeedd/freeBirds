import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaHandHoldingHeart ,FaHandHoldingUsd,FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

export const Features = ({type}) => {
  const navigate = useNavigate();
  const {user}  = useContext(AuthContext)
  console.log(user)

    return (
    <div id="features" className="text-center z-index-n2">
      <div className="container">
        <br/>
 {/*  <div className=" ps-5 pe-0 align-content-end col-md-10 col-md-offset-1 section-title ">
          <h2 className=""></h2>
        </div>  */}
        <div className=" row justify-content-center text-white max-vw-25 rounded-4 ms-2 me-2 shadow-lg pt-3 ps-3 pe-3 pb-3 max-vw-50 gap-1">
          
                <div className="  shadow  col-xs-6 col-md-3 bg-danger rounded-4 p-4 text-white z-index-1">
                  {" "}
                  <i className=" w-10"><FaHandHoldingHeart/></i>
                  {type === "user"?<><h3>Organisations</h3>
                  <br></br>
                  <p>Click to view organisation</p></>
                  :
                  <><h3>Help org</h3>
                 {/*  <p>help organisation by providing support</p> */}
                 <div className="ps-2 pe-2 d-flex justify-content-center gap-2 pt-4">
                                      <Button  className="bg-white text-danger border-white" onClick={() => navigate("/viewNeeds/")}>Services</Button> <br/>
                                      <Button className=" bg-white text-danger border-white" onClick={() => navigate("/viewAwareness/")}>Awareness </Button>                                       
                                       
                                   </div></>
                 }
                </div>

                {type ==="user" &&<div className="mw-75 shadow col-xs-6 col-md-3 bg-danger rounded-4 p-4 ">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Missing child</h3>
                  <div className="ps-2 pe-2 d-flex justify-content-center gap-3 pt-4">

                                       <div className=" bg-white text-danger border-white rounded  p-2 " onClick={() => navigate("/ReportMc/")}>Report</div>
                                       <div className=" bg-white text-danger border-white rounded  p-2" onClick={() => navigate("/searchmc")}>Search</div>
                                       <div className=" bg-white text-danger border-white rounded  p-2" onClick={() => navigate("/McList")}>View</div>
                                   </div>
                  </div>}
                {/* :
                  <p onClick={() => navigate("/McList")}>help to find missing child</p>  */}
                
                {type !=="user" &&<div onClick={() => navigate("/McList")} className="mw-75 shadow col-xs-6 col-md-3 bg-danger rounded-4 p-4 z-index-3">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Missing child</h3>              
                  <p onClick={() => navigate("/McList")}>help to find missing child</p>
                </div>}

                <div  className="max-vw-25 shadow col-xs-6 col-md-3 bg-danger rounded-4 p-4 z-index-2">
                  {" "}
                  <i className="w-10"><FaHandHoldingUsd/></i>
                  <h3>Support org</h3>
                 {type ==="user" ?<div className="d-flex justify-content-center gap-3 pt-4">

                                       <div className=" bg-white text-danger border-white rounded p-2 " onClick={() => navigate("/viewAwareness")}>Awareness</div>
                                       <div className=" bg-white text-danger border-white rounded  p-2" onClick={() => navigate("/viewNeeds")}>Needs</div>
                                       </div>
                 :                 
                 <p>help organisation by providing financial support</p>}                
                 
                 </div>
        </div>
        <br/>
      </div>
    </div>
  );
};
