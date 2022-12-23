// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const className = isDarkTheme
        ? 'dark-theme-background'
        : 'light-theme-background'

      return (
        <>
          <Navbar />
          <div className={`bg-container ${className}`}>
            <img
              className="img"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            {!isDarkTheme ? (
              <>
                <h1 className="light-theme-heading">Lost Your Way?</h1>
                <p className="light-theme-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </>
            ) : (
              <>
                <h1 className="dark-theme-heading">Lost Your Way?</h1>
                <p className="dark-theme-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
