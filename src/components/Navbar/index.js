// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }

      return !isDarkTheme ? (
        <>
          <nav className="light-theme-navbar-section">
            <img
              className="website-logo light-theme-font-color"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            />
            <ul className="link-list-container">
              <Link className="link-item light-theme-font-color" to="/">
                <li className="list-item">Home</li>
              </Link>
              <Link className="link-item light-theme-font-color" to="/about">
                <li className="list-item">About</li>
              </Link>
            </ul>
            <button
              testid="theme"
              onClick={changeTheme}
              type="button"
              className="theme-btn"
            >
              <img
                className="light-theme-font-color"
                alt="theme"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              />
            </button>
          </nav>
          <hr className="line-color" />
        </>
      ) : (
        <nav className="dark-theme-navbar-section">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
          />
          <ul className="link-list-container">
            <Link className="link-item" to="/">
              <li className="list-item dark-theme-font-color">Home</li>
            </Link>
            <Link className="link-item" to="/about">
              <li className="list-item dark-theme-font-color">About</li>
            </Link>
          </ul>
          <button
            testid="theme"
            onClick={changeTheme}
            type="button"
            className="theme-btn"
          >
            <img
              alt="theme"
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
