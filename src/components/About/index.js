import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
  faBootstrap,
  faFontAwesome,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import '../Layout/index.css'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'a', 'k', 'k', 'ı', 'm', 'd', 'a']}
              idx={15}
            />
          </h1>
          <p>
          Since I want to be a part of the changing and developing world with technology day by day, I turned to the software field. I really enjoy doing this job. I build various projects using Python, C# and JavaScript languages. I develop web applications with Flask in Python and React in JavaScript. I made div-based responsive design, Bootstrap tool experience, user information storage and landing page with HTML and CSS. 
          </p>
          <p>
          At the same time, I have knowledge about SQLite, MySQL, PostgreSQL, MongoDB database systems. I perform operations such as adding, deleting, updating, saving data on SQL Server with T-SQL. I do data mining with requests and BeautifulSoup libraries. I provide API integration of projects. I have created and managed websites of various forums. Every day I try to improve myself and learn new information.
          </p>
          
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#7B11F3" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faFontAwesome} color="#5D93D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
