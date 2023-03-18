import React from "react";
import { FaHandHoldingHeart ,FaHandHoldingUsd,FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Features = () => {
  const navigate = useNavigate();
  return (
    <div id="features" className="text-center z-index-n2">
      <div className="container">
        <br/>
 {/*  <div className=" ps-5 pe-0 align-content-end col-md-10 col-md-offset-1 section-title ">
          <h2 className=""></h2>
        </div>  */}
        <div className=" row justify-content-center text-white max-vw-25 rounded-4 shadow-lg pt-3 pb-3 max-vw-50">
          
                <div onClick={() => navigate("/login")} className="  shadow col-xs-6 col-md-3 bg-danger rounded-3 p-4 text-white z-index-1">
                  {" "}
                  <i className=" w-10"><FaHandHoldingHeart/></i>
                  <h3>Help org</h3>
                  <p>help organisation by providing support</p>
                </div>
                <div onClick={() => navigate("/login")} className="max-vw-25 shadow col-xs-6 col-md-3 bg-danger rounded-3 p-4 z-index-2">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Missing child</h3>
                  <p>help to find missing child</p>
                </div>
                <div onClick={() => navigate("/login")} className="max-vw-25 shadow col-xs-6 col-md-3 bg-danger rounded-3 p-4 z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingUsd/></i>
                  <h3>Support org</h3>
                  <p>help organisation by providing financial support</p>
                </div>
        </div>
        <br/>
      </div>
    </div>
  );
};
