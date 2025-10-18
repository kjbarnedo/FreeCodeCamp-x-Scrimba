import logo from "../assets/logo.png"
import logoName from "../assets/logo-name.png"
import headerVideo from '../assets/header.mp4'

const Header = () => {
  return (
    <>
    <header className="header-content">
      <video autoPlay loop muted className="bg-video" >
        <source src={headerVideo} type="video/mp4"/>
      </video>
      <div className="overlay"></div>

      <div className="logo-container">
        <img src={logo} className="w-15"/>
        <img src={logoName} className="w-55"/>

      </div>
      <nav className="nav-content">
        <ul>
          <a href="/"> <li>About</li> </a>
          <a href="/"> <li>Home</li> </a>
          <a href="/"> <li>Projects</li> </a>
        </ul>
      </nav>
        
    </header>
    
    </>
  )
}

export default Header
