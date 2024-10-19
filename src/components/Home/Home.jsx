import React,{useState} from 'react'
import "./Home.css"
import Nursary from '../Nursary/Nursary'
import Products from '../Products/Products'
import search from "../../Assets/search.png"
import logo from "../../Assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Fotter/Fotter'



   

const Home = () => {
    const [active, setActive] = useState('');
    const [activeButton, setActiveButton] = useState('');
    const [cartItemCount, setCartItemCount] = useState(3); 

    
  
   
    const handleActive = (linkName) => {
      setActive(linkName);
    }
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      };

  return (
    <div>
        <div className='background'>
             <p className='background-shipping'>Free Shipping on order above 999....</p>
             <p className='background-call'> Call us on :+91 9876805120</p>
        </div>
        <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-name">chaperone</span>
        </div>

        <ul className="navbar-links">
          <li className={`nav-item ${active === 'home' ? 'active' : ''}`} onClick={() => handleActive('home')}>
            Home
          </li>

          <li className={`nav-item dropdown ${active === 'plantPots' ? 'active' : ''}`} onClick={() => handleActive('plantPots')}>
            Plant & Pots
            <div className="dropdown-content">
              <a href="#indoor">Indoor Plants</a>
              <a href="#outdoor">Outdoor Plants</a>
            </div>
          </li>

          <li className={`nav-item dropdown ${active === 'tools' ? 'active' : ''}`} onClick={() => handleActive('tools')}>
            Tools
            <div className="dropdown-content">
              <a href="#pruning">Pruning Tools</a>
              <a href="#digging">Digging Tools</a>
            </div>
          </li>

          <li className={`nav-item dropdown ${active === 'services' ? 'active' : ''}`} onClick={() => handleActive('services')}>
            Our Services
            <div className="dropdown-content">
              <a href="#gardenDesign">Garden Design</a>
              <a href="#maintenance">Maintenance</a>
            </div>
          </li>

          <li className={`nav-item ${active === 'blogs' ? 'active' : ''}`} onClick={() => handleActive('blogs')}>
            Blogs
          </li>

          <li className={`nav-item ${active === 'ourStory' ? 'active' : ''}`} onClick={() => handleActive('ourStory')}>
            Our Story
          </li>

          <li className={`nav-item ${active === 'faqs' ? 'active' : ''}`} onClick={() => handleActive('faqs')}>
            FAQs
          </li>

          {/* Profile with Icon */}
          <li className={`nav-item ${active === 'profile' ? 'active' : ''}`} onClick={() => handleActive('profile')}>
            <FontAwesomeIcon icon={faUser} className="icon" /> My Profile
          </li>

        
          <li className={`nav-item ${active === 'cart' ? 'active' : ''}`} onClick={() => handleActive('cart')}>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            Cart
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </li>
        </ul>
      </nav>

    <div className="search-container">
    <div className="input-with-icon">
        <img src={search}alt="Search" className="search-icon" />
        <input
            type="text"
            placeholder="Search Plants"
            className="search-input"
        />
    </div>
</div>

<div className='buttonscontainer'>
      <button
        className={`plant ${activeButton === 'plants' ? 'active' : ''}`}
        onClick={() => handleButtonClick('plants')}
      >
        Plants
      </button>
      <button
        className={`plant ${activeButton === 'tools' ? 'active' : ''}`}
        onClick={() => handleButtonClick('tools')}
      >
        Tools
      </button>
      
    </div>
      <div className='text'>
        <h1>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</h1>
      </div>

      <div className='Nursary'>
        <Nursary/>
      </div>
      <div className='Nursary'>
        <Products/>
      </div>
      <div className='viemore'>
        <button className='buttonview'>View More</button> </div>
      <div className='Nursary'>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
