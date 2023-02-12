
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import SearchMc from "./pages/searchchild/SearchMC";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import jwt from "jwt-decode"
import jwtDecode from 'jwt-decode';


function App() {
  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const token = jwtDecode(user)
    if( user === null || !token.type.isAdmin){
      return<Navigate to="/login"/>;
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
              <Route path="/searchMc/" 
              index
              element={
                // <ProtectedRoute>
                  <SearchMc/>
                // </ProtectedRoute>
              }
              />
              {/* <Route path="/searchMc/" element={<SearchMc/>}/> */}

             </Routes>
         </BrowserRouter> 
          
    </div>
  );
}

export default App;

