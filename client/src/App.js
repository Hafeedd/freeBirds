
import './App.css';
import React from 'react';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import SearchMc from "./pages/searchchild/SearchMC";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Donation from './pages/donation/Donation';
import Admin from './pages/admin/Admin';
import Org from './pages/organisation/Org';
import User from './pages/user/User';
/* import Logout from './pages/logout/Logout'; */
import Addorg from './pages/admin/Addorg';

import CryptoJS  from 'crypto-js';
import NotFound from './components/error/NotFound';
import AddSpr from './components/forms/AddSpr';
import ViewUser from './components/table/ViewUser';
import Feedback from './components/forms/Feedback';
import AboutUs from './components/aboutUs/AboutUs';
import PostAwns from './components/awareness/PostAwns';
import ViewAwns from './components/awareness/ViewAwns';
import FeedbackList from './components/table/FeedbackList';
import MCList from './components/table/MCList';
import ViewNeeds from './components/orgNeeds/ViewNeeds';
import OrgNeeds from './components/orgNeeds/OrgNeeds';
/* import UsrProfile from './components/UserProfile/UsrProfile';
 */


function App() {
  const ProtectedRouteUser = ({children}) => {
    const key = 'gzLxc16cnBhScdScGijOEXdAyv2XkgR5TRqYPK5FH7Q='
    const {user} = useContext(AuthContext);
    if(user != null){
    const data = CryptoJS.AES.decrypt(user,key);
    var token = JSON.parse(data.toString(CryptoJS.enc.Utf8));}
    if( user === null || !token.type.isUser){
      return <Navigate to="/login"/>;
    }
    return children
  }

  const ProtectedRouteOrg = ({children}) => {
    const key = 'gzLxc16cnBhScdScGijOEXdAyv2XkgR5TRqYPK5FH7Q='
    const {user} = useContext(AuthContext);
    if(user != null){
      const data = CryptoJS.AES.decrypt(user,key);
      var token = JSON.parse(data.toString(CryptoJS.enc.Utf8));
      console.log(token.type.isOrg)}
      if (user === null || !token.type.isOrg){
      return <Navigate to="/login"/>;
    }
      return children
  }

  return (
    <div>
         <BrowserRouter>
             <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login/" element={<Login/>}/>
              <Route path="/signup/" element={<SignUp/>}/>
              <Route path="/searchMc/" index element={
                <ProtectedRouteUser>
                  <SearchMc/>
                </ProtectedRouteUser>}/>
              <Route path="/searchMc/" element={<SearchMc/>}/>
              <Route path="/admin/" element={<Admin/>}/>
              <Route path="/aboutUs/" element={<AboutUs/>}/>
              <Route path="/addorg/" element={<Addorg/>}/>
              <Route path="/donation/" element={<Donation/>}/>

              <Route path="/organisation/" element={<Org/>}/>
              <Route path="/user/" element={<User/>}/>
              <Route path="/addspsr/" element={<AddSpr/>}/>
              <Route path="/viewUser" element={<ViewUser/>}/>
{/*               <Route path="/UserProfile" element={<UsrProfile/>}/> */}
              <Route path="/postAwareness"  index element={
                <ProtectedRouteOrg>
                <PostAwns/>
                </ProtectedRouteOrg>}/>
              <Route path="/viewAwareness" element={<ViewAwns/>}/>
              <Route path="/viewNeeds" element={<ViewNeeds/>}/>
              <Route path="/OrgNeeds" element={<OrgNeeds/>}/>
              <Route path="/feedback" element={<Feedback/>}/>
              <Route path="/feedbackList" element={<FeedbackList/>}/>
              <Route path="/McList" element={<MCList/>}/>
              <Route path='*' element={<NotFound/>}/>
             </Routes>
         </BrowserRouter> 
          
    </div>
  );
}

export default App;

