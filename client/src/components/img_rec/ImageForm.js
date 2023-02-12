import React from 'react'
import  './ImageForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageForm = () => {
  return (


	<div>
	  <div class="contact-form-wrapper d-flex justify-content-center">
		<form action="#" class="contact-form">
		  <h5 class="title">Missing child details</h5>
		  <p class="description">please give the accurate details of missing child
		  </p>
		  <div>
			<input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
		  </div>
		  <div>
			<input type="file" class="form-control rounded border-white mb-3 form-input" placeholder="image of child" required/>
		  </div>
		  
		  <div class="submit-button-wrapper">
			<input type="submit" value="Submit"/>
		  </div>
		</form>
	  </div>
	</div>
  )
}

export default ImageForm