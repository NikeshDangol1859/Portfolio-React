import React from 'react'

function Contact() {
  return (
    <>
                <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <div className="contact-grid">
                <div className="contact-card">
                <div className="contact-icon">                        
                    <i className="fa-solid fa-phone" />
                </div>
                <h2 className="contact-heading">Contact Number</h2>
                <p className="contact-detail">9861476935 / 9818621859</p>
                </div>
                <div className="contact-card">
                <div className="contact-icon">
                    <i className="fa-regular fa-envelope" />
                </div>
                <h2 className="contact-heading">Email Address</h2>
                <p className="contact-detail"><a href="mailto:nikeshdangol126@gmail.com"> nikeshdangol126@gmail.com </a></p>
                </div>
                <div className="contact-card">
                <div className="contact-icon">
                    <i className="fa-solid fa-earth-asia" />
                </div>
                <h2 className="contact-heading">Website</h2>
                <p className="contact-detail"><a href="http://nikeshdangol126.com.np" target="_blank" rel="noopener noreferrer"> nikeshdangol126.com.np</a></p>
                </div>
            </div>           
            <div className="contact-grid justify-content-center mt-5 ">
                <div className="contanct-footer ">
                <h2 className=" find text-white mb-4 ">Also  <span className="text-warning text-decoration-underline">Find Me on: </span> </h2>
                <div className="icons d-flex ">
                    <a href="https://www.instagram.com/neekesh_dangol/" className="icons-contact" target="_blank" style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="instagram"><i className="fa-brands fa-instagram" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100007808718971" className="icons-contact" target="_blank" style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="facebook"><i className="fa-brands fa-facebook" /></a>
                    <a href="https://www.linkedin.com/in/nikesh-dangol/" className="icons-contact" target="_blank" style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="linkedin"><i className="fa-brands fa-linkedin" /></a>
                    <a href="https://github.com/NikeshDangol1859" className="icons-contact" target="_blank" style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="github"><i className="fa-brands fa-github" /></a>
                </div>
                </div>
            </div>
            </div>

      
    </>
  )
}

export default Contact
