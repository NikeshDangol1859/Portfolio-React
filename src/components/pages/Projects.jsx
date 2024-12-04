import React from 'react'

function Projects() {
  return (
    <>
                <div className="projects-container">
            <h1 className="title">Projects</h1>
            <div className="projects-grid">
                {/* E-commerce Project */}
                <div className="project-card">
                <h2 className="project-title">E-COMMERCE WEBSITE</h2>
                <p className="tech-stack">PHP • HTML • JavaScript • CSS • Bootstrap</p>
                <p className="description">
                    A web-based application that allows users to view and buy products. 
                    Used HTML, CSS, and Bootstrap for the frontend and PHP for the database.
                </p>
                </div>
                {/* Tic Tac Toe Project */}
                <div className="project-card">
                <h2 className="project-title">TIK TAC TOE GAME</h2>
                <p className="tech-stack">• JAVA</p>
                <p className="description">
                    In this project, there are two players. One is 'X' and the other is 'O'. 
                    This project is made using Java.
                </p>
                </div>
                {/* Portfolio Project */}
                <div className="project-card">
                <h2 className="project-title">PORTFOLIO</h2>
                <p className="tech-stack">HTML • CSS • JavaScript • Bootstrap</p>
                <p className="description">
                    A Portfolio Website designed to showcase projects and connect with people.
                </p>
                </div>
            </div>
            <div className="projects-grid mt-5">  
                {/* News  Project */}            
                <div className="project-card">
                <h2 className="project-title">News WEBSITE</h2>
                <p className="tech-stack">HTML • JavaScript • CSS • Bootstrap</p>
                <p className="description">
                    A web-based application that allows users to view the news. 
                    Used HTML, CSS, and Bootstrap for the frontend and PHP for the database.
                </p>
                </div>
                {/* Recipe  Project */}            
                <div className="project-card">
                <h2 className="project-title">Food Recipe</h2>
                <p className="tech-stack">HTML • JavaScript • CSS • Bootstrap</p>
                <p className="description">
                    A web-based application that allows users to add and view the food recipe. 
                    Used HTML, CSS, and Bootstrap for the frontend and PHP for the database.
                </p>
                </div>
            </div>
            </div>
        <div className="projects"></div>
      
    </>
  )
}

export default Projects
