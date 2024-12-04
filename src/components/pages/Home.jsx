import React from 'react'

function Home() {
  return (
    <>
            <div className="container-home">
        <div className="main-home">
            <div className="mytexts">
            <h2 className="text-center subheading"><p> HEY! I AM </p></h2> 
            <h1 className="text-center text-uppercase">Nikesh Dangol</h1>
            <h2 className="text-center">I like <span className="animation-text" /> </h2>
            <div className="icons">
                <a href="https://www.instagram.com/neekesh_dangol/" className="icons-home" target="_blank"><i className="fa-brands fa-instagram" /></a>
                <a href="https://www.facebook.com/profile.php?id=100007808718971" className="icons-home" target="_blank"><i className="fa-brands fa-facebook" /></a>
                <a href="https://www.linkedin.com/in/nikesh-dangol/" className="icons-home" target="_blank"><i className="fa-brands fa-linkedin" /></a>
                <a href="https://github.com/NikeshDangol1859" className="icons-home" target="_blank"><i className="fa-brands fa-github" /></a>
            </div>
            <div className="btn">
                <button type="button" className="btn btn-outline-warning">
                <a href="CV(Nikesh).pdf" download className="text-decoration-none">Download CV</a>
                </button>
            </div>
            </div>
            <div className="myimages">
            <div className="images">
                <img src="NikeshDangol.png" alt={'NikeshDangol'} />
            </div>
            </div>
        </div>
        </div>

      
    </>
  )
}

export default Home
