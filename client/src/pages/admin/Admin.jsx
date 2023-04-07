import React from 'react'
import FbNavbar from '../../components/fbnavbar/FbNavbar'
import { FaBuilding, FaEnvelope, FaHandHoldingHeart ,FaSearch, FaUser} from 'react-icons/fa';
import Chart from '../../components/chart/Chart';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  return (
    <>
     
     
     <FbNavbar type="admin"/>
     <div id="features" className="text-center mt-5">
      <div className="container">
        <br/>
        
       {/* <div className=" ps-5 ] pe-0 text-center align-content-end col-md-10 col-md-offset-1 section-title pt-5 ">
          <h2 className=" fa-shake">Admin panel</h2>
        </div>  */}
        <h2 className="text-black-50">Admin panel</h2>
        <br/>
        <div className=' shadow rounded-4 pb-3 justify-content-center  align-content-center'>
        <Chart/>
        </div>
        
        <br/>
        <div className=" row justify-content-center text-black justify-content-between pt-2">
              
                <div onClick={() => navigate("/addorg/")} className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 text-black z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingHeart/></i>
                  <h3>Add org</h3>
                  <p>help organisation by providing support</p>
                </div>
                <div onClick={() => navigate("/viewOrg/")} className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 text-black z-index-1">
                  {" "}
                  <i className="w-10"><FaBuilding/></i>
                  <h3>View org</h3>
                  <p>view the organisations list and details</p>
                </div>
                <div onClick={() => navigate("/feedbackList/")}  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-2">
                  {" "}
                  <i className="w-10"><FaEnvelope/></i>
                  <h3>View feedback</h3>
                  <p>view feedback of user</p>
                </div> 
                
        </div>
        <br/>
        <div className=" row justify-content-center text-black justify-content-between pt-2">
          
                <div  onClick={() => navigate("/donation/")} className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 text-black z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingHeart/></i>
                  <h3>donation details</h3>
                  <p>help organisation by providing support</p>
                </div>
                <div onClick={() => navigate("/McList/")} className="shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-1">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>case status</h3>
                  <p>missing case status</p>
                </div>
                 <div onClick={() => navigate("/viewUser")}  className="shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-1">
                  {" "}
                  <i className="w-10"><FaUser/></i>
                  <h3>view user</h3>
                  <p>user statictis</p>
                </div> 
        </div>
      </div>
    </div>

    </>
  )
}

export default Admin