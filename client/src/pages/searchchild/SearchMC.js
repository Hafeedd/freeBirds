import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {
  
  const [newUser, setNewUser] = useState(
        {
            photo: '',
        }
    );

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        await axios.post('http://localhost:8800/api/searchMC/',{
            photo: newUser.photo,
        },{withCredentials: true}).then(res =>{
          if(!res.data.FaceId){
            return("Matching face not found")
          }
          console.log(res)
      });
      }
    catch(err){
      console.log(err.response.data)
    }
  }

   const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const handleFileUpload = async (e) => {
        let base64 = ""
        const file = e.target.files[0];
        base64 = await convertToBase64(file);
        setNewUser({...newUser, photo: base64 });
    }

    return (
        <div>
	  <div className="contact-form-wrapper d-flex justify-content-center">
            <form className="contact-form"  onSubmit={handleSubmit} encType='multipart/form-data'>
            <h5 className="title">Search Missing Child</h5>
		  <p className="description">please give the accurate details of missing child
		  </p>
          <div>
            <input className="form-control rounded border-white mb-3 form-input"
                type="file" 
                accept=".jpeg, .png, .jpg"
                name="photo"
                onChange={handleFileUpload}
            />
            </div>

            <div className="submit-button-wrapper">
            <input 
                type="submit"
            />
            </div>
        </form>
         </div>
        </div>
    );
}

export default Users;