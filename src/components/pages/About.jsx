import React from 'react'

function About() {
  return (
    <>
                    <div className="container">
        <div className="container-about mt-5">
            <div className="main-about">
            {/* <div class="about-image">
                    <img src="./pictures/nikesh.jpg" alt="Profile Picture" class="rounded-circle">
                    </div> */}
            <div className="col-md-12 text-light p-5">
                <h1 className="headtext">About Me</h1>
                <div className="paragraph">
                <p className="text-center">I am <span className="fw-bold text-warning">Nikesh Dangol </span>, a passionate and dedicated
                    <span className="text-warning"> software developer </span> with a strong foundation in computer science and a keen eye for detail. I am a
                    quick learner, a team player, and a creative problem solver. I am excited to bring my
                    skills and experience to a dynamic and innovative company where I can make a meaningful
                    contribution.</p> 
                <p className="text-center">I am a lifelong learner, always seeking to improve my skills
                    and knowledge in the field of software development. I am excited to collaborate with others
                    and contribute to the development of innovative solutions that make a positive impact on society.</p>
                <p className="text-center">I am a strong believer in the importance of teamwork and collaboration
                    in achieving success. I am excited to work with a talented team of professionals who share my
                    passion for software development and my commitment to excellence.</p>
                <a href="/resume.html" className="text-warning justify-content-end">Know More <span className="know-animation" /></a>
                </div>
                <h2 className="offer text-center">What I Offer</h2>
                <div className="about-grid">
                <div className="about-card">                          
                    <h2 className="about-heading">UI/UX Design</h2>
                    <div className="about-icon">                        
                    <img src="UI.png" alt />
                    </div>
                    <p className="about-detail">
                    I am skilled in creating user-friendly and visually appealing UI/UX designs that meet the needs of
                    users and enhance the overall user experience.
                    </p>
                </div>
                <div className="about-card">                          
                    <h2 className="about-heading">Graphic Design</h2>
                    <div className="about-icon">                        
                    <img src="graphics.png" alt />
                    </div>
                    <p className="about-detail">
                    I am skilled in creating visually appealing and effective graphic designs that communicate the
                    message and enhance the overall visual appeal of a product or service.
                    </p>
                </div>
                <div className="about-card">                          
                    <h2 className="about-heading">Website Design</h2>
                    <div className="about-icon">                        
                    <img src="web.png" alt />
                    </div>
                    <p className="about-detail">
                    I am skilled in creating visually appealing and user-friendly website designs that meet the needs of users and
                    enhance the overall user experience
                    </p>
                </div>
                {/* <div class="about-card">                          
                    <h2 class="about-heading">UI/UX Design</h2>
                    <div class="about-icon">                        
                        <img src="/pictures/web.png" alt="">
                    </div>
                    <p class="about-detail">
                        I am skilled in creating user-friendly and visually appealing UI/UX designs that meet the needs of
                        users and enhance the overall user experience.
                    </p>
                </div> */}
                </div>
                {/* <div class="buttons mt-5 mb-5 d-flex justify-content-end">
                        <button type="button" class="btns btn-warning m-3"><a href="/resume.html" class="text-dark">Know me More <i class="fa-solid fa-arrow-right"></i></a></button>                        
                        <button type="button" class="btns btn-warning m-3"> <a href="/contact.html" class="text-dark">Contact Me <i class="fa-solid fa-arrow-right"></i></a></button>
                        </div> */}
            </div>
            </div>
        </div>
        </div>


      
    </>
  )
}

export default About
