import React from 'react'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
 */
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <footer className="bg-black text-center text-white">
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
     {/*  <!-- Facebook --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/login/" role="button">
       <i><FaFacebookF/></i></a>
{/*<!-- Twitter --> */}
      <a className="btn btn-outline-light btn-floating m-1" href='https://twitter.com/login?lang=en' role="button"
        ><i><FaTwitter/></i></a>

    {/*   <!-- Google --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" role="button"
        ><i><FaGoogle/></i></a>

      {/* <!-- Instagram --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button"
        ><i><FaInstagram/></i></a>

     {/*  <!-- Linkedin --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://in.linkedin.com/" role="button"
        ><i><FaLinkedinIn/></i></a>

     {/*  <!-- Github --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/login" role="button"
        ><i><FaGithub/></i></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3 bg-dark-50">
    © 2023 Copyright:
    <a className="text-white" href="#">Free birds.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </>
  )
}

export default Footer