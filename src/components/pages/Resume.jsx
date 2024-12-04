import React from 'react'

function Resume() {
  return (
    <>
                <section id="resume-section">
            <div className="container-resume">
                <div className="row">
                <div className="col-md-3">
                    <nav id="navi">
                    <ul>
                        <li><a href="#page-1">Education</a></li>
                        <li><a href="#page-2">Experience</a></li>
                        <li><a href="#page-3">Skills</a></li>
                    </ul>
                    </nav>
                </div>
                <div className="col-md-9">
                    <div id="page-1" className="page one">
                    <h2 className="heading">Education</h2>
                    <div className="resume-wrap d-flex">
                        <div className="icon d-flex align-items-center justify-content-center mb-4">
                        <span><i className="fa-solid fa-graduation-cap" /></span>
                        </div>
                        <div className="text pl-3">
                        <h2>Jana Bhawana Campus</h2>
                        <span className="position">Bachelor In Computer Application</span>
                        <p><strong>Software Developer</strong></p>
                        <p>Chapagaun- Lalitpur</p>
                        <span className="date">2021-2025</span>
                        </div>
                    </div>
                    <div className="resume-wrap d-flex  ">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <span> <i className="fa-solid fa-book-open" /></span>
                        </div>
                        <div className="text pl-3">
                        <h2>Bright Future College</h2>
                        <span className="position">+2</span>
                        <p><strong>Computer Science</strong></p>
                        <p>Satdobato - Lalitpur</p>
                        <span className="date">2017-2019</span>
                        </div>
                    </div>
                    <div className="resume-wrap d-flex  ">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-book-open" /></span>
                        </div>
                        <div className="text pl-3">
                        <h2>Aptech Computer Education</h2>
                        <span className="position">Web Development</span>
                        <p><strong>Computer Training</strong></p>
                        <p>Kumaripati - Lalitpur</p>
                        <span className="date">2017 (Three months)</span>
                        </div>
                    </div>
                    </div>
                    <div id="page-2" className="page two">
                    <h2 className="heading">Experience</h2>
                    <div className="resume-wrap d-flex  ">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-suitcase" /> </span>
                        </div>
                        <div className="text pl-3">
                        <h2>Teaching</h2>
                        <span className="position">Eternal Shalom Secondary School</span>
                        <p className="date">2075 -2080</p>
                        </div>
                    </div>
                    <div className="resume-wrap d-flex  ">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-computer" /></span>
                        </div>
                        <div className="text pl-3">
                        <h2>Designer</h2>
                        <span className="position">Manjushree Printing Press</span>
                        <p className="date">2073-2075</p>
                        </div>
                    </div>
                    <div className="resume-wrap d-flex  ">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-laptop-code" /></span>
                        </div>
                        <div className="text pl-3">
                        <h2>Internship</h2>
                        <span className="position">Genius System Pvt. Ltd.</span>
                        <p className="date">2024 (Three Months)</p>
                        </div>
                    </div>
                    </div>
                    <div id="page-3" className="page three">
                    <h2 className="heading">Skills</h2>
                    {/* Skill Section */}
                    <div className="row mb-4  ">
                        <div className="col grow"><img className="img-fluid" src="javascript.png" title="JavaScript" /></div>
                        <div className="col grow"><img className="img-fluid" src="java.png" title="Java" /></div>
                        <div className="col grow"><img className="img-fluid" src="php.png" title="PHP" /></div>
                        <div className="col grow"><img className="img-fluid" src="html.png" title="HTML" /></div>
                        <div className="col grow"><img className="img-fluid" src="css.png" title="CSS" /></div>
                        <div className="col grow"><img className="img-fluid" src="bootstrap.png" title="Bootstrap" /></div>
                    </div>
                    <div className="row mb-4  ">
                        <div className="col grow"><img className="img-fluid" src="c.png" title="C" /></div>
                        <div className="col grow"><img className="img-fluid" src="csharp.png" title="C#" /></div>
                        <div className="col grow"><img className="img-fluid" src="photoshop.png" title="Photoshop" /></div>
                        <div className="col grow"><img className="img-fluid" src="lightroom.png" title="Lightroom" /></div>
                        <div className="col grow"><img className="img-fluid" src="illustrator.png" title="Illustrator" /></div>
                        <div className="col grow"><img className="img-fluid" src="indesign.png" title="Indesign" /></div>
                    </div>
                    <div className="row mb-4  ">
                    </div>
                    </div>                        
                </div>
                </div>
            </div>
            </section>

      
    </>
  )
}

export default Resume
