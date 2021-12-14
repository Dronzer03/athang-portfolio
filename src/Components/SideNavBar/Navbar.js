import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-scroll";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-menu-items' style={sidebar ? {} : {"display":"none"}}>
            <div className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <div className={item.className}>
                  <Link to={item.path} onClick={showSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;