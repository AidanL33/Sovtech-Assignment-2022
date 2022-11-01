import React from 'react'
import './About.css'
import me from '../pic/me.jpg'

const About = () => {
  return (
    <section>
        <div className="hero" id="about">
            <div className="container f_flex top">
                <div className="left">
                    <h3>A BIT ABOUT ME: </h3>
                        <p>I am 25 years old, I live in Benoni, Gauteng on a plot with 11 amazing animals.
                        I have always been fasinated with coding and always wanted to pussure is, thats when I found HyperionDev.
                        Since then I fell in love with coding and completed my Software Engineering boot camp. After that I have always 
                        wanted to better my skills and I found an online training program for front-end developing with Brainnest.
                        After that month of training I was on the hunt to find my first developer job and I got a chance to have a two month
                        trial as a Junior Web Developer with Sketch Advertising. Now I am on a mission to start my dream career!

                        In my spare time I love trying to teach myself new skills to better my knowledge of coding. I enjoy spending time with my
                        friends and making memories. I love the out doors and every chance I get to expore I'll take it. I also have little hobbies like,
                        playing games with my friends, collecting comic books.
                        </p>
                </div>

            </div>

            <div className="right">
                <div className="right_img center">
                    <img src={me} alt="" />
                </div>
            </div>
            
        </div>
      
    </section>
  )
}

export default About
