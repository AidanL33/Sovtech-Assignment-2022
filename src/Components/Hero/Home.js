import React from 'react'
import './Home.css'
import { Typewriter} from 'react-simple-typewriter'


const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
            <div className="left top">
                <h3>WELCOME TO MY FIRST REACT PAGE :)</h3>
                <h1>
                    Hi, I'm <span>Aidan Knowles</span>
                </h1>
                <h2>
                    a <span>
                    <Typewriter
                    words={[' Aspiring Software Engineer. ', ' Developer.']}
                    loop
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                    </span>
                </h2>

                <h3>WHY I WANT TO JOIN SOVTECH:</h3>
                <p>I have been following Sovtech's page on LinkedIn for awhile now and on Instagram and I love how you get involved with everything.
                I feel like it is really a great company and a great environment to kick start your career, especially with all the help from
                the experienced developers that work there. I know I can learn a lot from you guys and I know I could reach my goals and become the 
                developer I want to be. I thrive when I get to learn new things and always want to better my skills, and I am certain I can accomplish 
                that at Sovtech. I am a hard worker and love seeing results when I finish a project and I hope I can learn amazing things with you. I hope 
                this page comes out alright, this is my first attempt with react. I hope you have a great day and thank you for this opportunity and 
                taking time to review my page.
                </p>

            </div>
        </div>
      </section>
    </>
  )
}

export default Home
