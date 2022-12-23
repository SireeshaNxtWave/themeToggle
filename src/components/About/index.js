// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <>
            {!isDarkTheme ? (
              <div className="about-container">
                <img
                  className="img light-theme-color"
                  alt="about"
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                />
                <h1 className="about-heading light-theme-color">About</h1>
              </div>
            ) : (
              <div className="about-container dark-theme-about-container">
                <img
                  className="img dark-theme-colo"
                  alt="about"
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                />
                <h1 className="about-heading dark-theme-color">About</h1>
              </div>
            )}
          </>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
