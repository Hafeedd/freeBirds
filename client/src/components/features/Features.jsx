import React from "react";
import { FaHandHoldingHeart ,FaSearch} from 'react-icons/fa';

export const Features = () => {
  return (
    <div id="features" className="text-center z-index-n2">
      <div className="container">
        {/* <div className=" ps-5 pe-0 align-content-end col-md-10 col-md-offset-1 section-title ">
          <h2 className="">Features of free birds</h2>
        </div> */}
        <div className=" row justify-content-center text-white">
          
                <div  className=" shadow col-xs-6 col-md-3 bg-danger rounded-3 p-4 text-white">
                  {" "}
                  <i className="w-10"><FaHandHoldingHeart/></i>
                  <h3>Help org</h3>
                  <p>help organisation for fulfill our responsibility</p>
                </div>
                <div  className=" shadow col-xs-6 col-md-3 bg-danger rounded-3 p-4">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Missing child</h3>
                  <p>help organisation for fulfill our responsibility</p>
                </div>
                <div  className="shadow col-xs-6 col-md-3 bg-danger rounded-3 p-4">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Help org</h3>
                  <p>help organisation for fulfill our responsibility</p>
                </div>
        </div>
      </div>
    </div>
  );
};
