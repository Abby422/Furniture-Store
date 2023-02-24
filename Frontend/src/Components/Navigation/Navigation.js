import React, {useState} from 'react'
import './Navigation.css'
import {IconContext} from "react-icons";
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoSearchOutline, IoCartOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const style = {color : 'black'}
function Navigation() {
  // const [search, setSearch] = useState(null)
  const {cart} = useSelector(state => (state.cart))
  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="Navigation">
      <IconContext.Provider value={{ size: 25 }}>
        <div className="container">
          <div className="logo">
            <NavLink to={`/`} className="text-link">
              SPACEJOY
            </NavLink>
          </div>
          {/* <input type='search'name='searchBar' onChange={e =>{setSearch(e.target.value)}} />
            <Link to={`/search/${search}`} style={style}><div className='search-icon'><IoSearchOutline /></div></Link> */}

          <div className={`navigation-elements ${showNav && "active"}`}>
            <div>
              <ul>
                <li>
                  <NavLink to={``} className="text-link">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/shop`} className="text-link">
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/collection`} className="text-link">
                    COLLECTION
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/about`} className="text-link">
                    ABOUT US
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="navigation-icons">
            <div className="profile" style={style}>
              <CgProfile />
            </div>
            <div className="cart-icon">
              <NavLink to={`/cart`} className="text-link">
                <div className="cart-count">
                  {cart.length !== 0 ? cart.length : ""}
                </div>
              </NavLink>
              <IoCartOutline />
            </div>
          </div>

          <div className="hamburger-menu" onClick={toggleNavItems}>
            <GiHamburgerMenu />
          </div>
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Navigation