import React, { useState } from 'react'
import './ProjectsStyle.css'
import brooke from '../img/brooke.gif'
import Button from '../Button/Button'
import travel from '../img/travel advisor.png'
import my from '../img/my.gif'




  

const Projects = () => {
    return (
        <div className='projects-page'>
            <h1 className='title'>Programming Projects</h1>
            <div className='projects-container'>
              <div className='project first'>
                  <div><img src={brooke} alt="" /></div>
                  <div className='text'>
                    <p><h3>Roller Diva</h3>The task was to design a captivating portfolio for a professional roller skater. Key features requested were 80s themes, pastel colors, blog-style graphics, and an emphasis on video playback. Features implemented:</p>
                    <p>-Responsive design suitable for all devices.</p>
                    <p>-Play on hover feature implemented using Vimeo Player API.</p>
                    <p>-Utilized vibrant colors to match the skater's style and brand.</p>
                    <p>-Implemented a mix of Bootstrap and custom CSS styling to fix videos onto a carousel.</p>
                    <p>-Routed a custom contact page using PHP to send client inquiries.</p>
                    <div id='button'>
                        <Button  link="https://brooke-cordelia.com/index.html" text={'Live Demo'}/>
                    </div>
                    
                  </div>
                  
                  
              </div>

        
            <div className='project second'>
                <div className='text'>
                    <p><h3>Luna</h3>The Attractions Advisor application aims to provide users with the ability to locate trendy, good quality attractions in their area. 
                    </p>
                    <p>
                    -Utilizes the Google Maps API to locate and display establishments in a specified area.   
                    </p>
                    <p>
                    -Scraped business information like address, phone number, ratings, and awards from the Travel Advisor API.
                    </p>
                    <p>-Displayed the data gathered using a Material UI design framework.</p>
                    <p>Organized documents using React components.</p>
                </div>
                <div><img src={travel} alt="" /></div>
            </div>

              <div className='project'>
                  <div><img src={my} alt="" /></div>
                  <div className='text'>
                    <p><h3>Luna</h3>I had previously created a personal website to showcase my graphic design work. Though the website did serve its purpose for a few years, adding my own personal aesthetic and design felt impossible within the confines of the website builder.

                    After studying documentation, online tutorials, and reading through JS libraries, I felt equipped to update my website and have it look exactly how I want it.

                    Technologies used are HTML, CSS, Sass, JS, JQuery, and PHP.</p>
                  </div>  
              </div>


            </div>
        </div>
    )
}

export default Projects
