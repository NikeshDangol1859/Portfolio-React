import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
                        <div className="projects-container">
            <h1 className="title">My Projects</h1>
            <div className="projects-grid">
                {/* E-commerce Project */}
                <div className="project-card">
                <h2 className="project-title">E-COMMERCE WEBSITE</h2>
                <p className="tech-stack">PHP • HTML • JavaScript • CSS • Bootstrap</p>
                <p className="description">
                    A web-based application that allows users to view and buy products. 
                    Used HTML, CSS, and Bootstrap for the frontend and PHP for the database.
                </p>
                <div className="linkproject text-start"> 
                    <Link to={"/projectgallary#ecommerce"} className="description justify-content-end">Know More <span className="dot-animation" /></Link>
                </div>
                </div>
                
                {/* Tic Tac Toe Project */}
                <div className="project-card">
                <h2 className="project-title">TIK TAC TOE GAME</h2>
                <p className="tech-stack">• JAVA</p>
                <p className="description">
                    A web-based project where there are two players. One is 'X' and the other is 'O'. Where there is Three sequence of any player the player wins.
                    This project is made using Java.
                </p>
                <div className="linkproject text-start"> 
                    <Link to={"/projectgallary#tiktactoe"} className="text-start description justify-content-end">Know More <span className="dot-animation" /></Link>
                </div>
                </div>
                {/* Portfolio Project */}
                <div className="project-card">
                <h2 className="project-title">PORTFOLIO</h2>
                <p className="tech-stack">HTML • CSS • Bootstrap</p>
                <p className="description">
                    A web-based application where the user get to know about you after visiting your portfolio like projects, contact, location etc.
                    It is build using HTML and CSS programming languages.
                </p>
                <div className="linkproject text-start"> 
                    <Link to={"/projectgallary#portfolio"} className="text-start description justify-content-end">Know More <span className="dot-animation" /></Link>
                </div>
                </div>              
            </div>
            <div className="projects-grid mt-5">  
                {/* News  Project */} 
                <div className="project-card">
                <h2 className="project-title">News WEBSITE</h2>
                <p className="tech-stack">HTML • JavaScript • CSS • Bootstrap • React</p>
                <p className="description">
                    A web-based application that allows users to view the news. 
                    Used HTML, CSS, Bootstrap and React for the frontend design.
                </p>
                <div className="linkproject text-start"> 
                    <Link to={"/projectgallary#news"} className="text-start description justify-content-end">Know More <span className="dot-animation" /></Link>
                </div>
                </div>
                {/* Recipe  Project */}            
                <div className="project-card">
                <h2 className="project-title">Food Recipe</h2>
                <p className="tech-stack">HTML • JavaScript • CSS • Bootstrap • React </p>
                <p className="description">
                    A web-based application that allows users to add and view the food recipe. 
                    Used HTML, CSS, Bootstrap and React for the frontend design.
                </p>
                <div className="linkproject text-start"> 
                    <Link to={"/projectgallary#foodrecipe"} className="text-start description justify-content-end">Know More <span className="dot-animation" /></Link>
                </div>
                </div>
            </div>
            </div>

      
    </>
  )
}

export default Projects
