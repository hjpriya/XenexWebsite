import React, {useState} from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import {Link} from 'react-router-dom'
import logo from './svg/logo.png';

export default function Header() {
    const [menu, setMenu] = useState(false)
    const [productSubmenuOpen, setProductSubmenuOpen] = useState(false);

    const toggleMenu = () =>{
        const newMenuState = !menu;
        setMenu(newMenuState);
        if (!newMenuState) {
            setProductSubmenuOpen(false);
        }
    }

    const toggleProductSubmenu = () => {
        setProductSubmenuOpen(!productSubmenuOpen);
    }
    const handleLinkClick = () => {
        setMenu(false); 
        setProductSubmenuOpen(false); 
    }
    return (
        <header className="web-header">
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="menu-title nav-menu">
                 <img src={logo} className="header-web-logo" alt="logo" width={"150px"} />
            <ul className={menu ? 'open' : ''}>
                {/* Close button for the mobile menu */}
                <li onClick={toggleMenu} style={{textAlign: 'right', paddingRight: '20px', cursor: 'pointer'}}>
                    <img src={Close} alt="Close menu" width="30" className="menu" />
                </li>
                <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/home" onClick={handleLinkClick}>BrassPipeFitting</Link></li>
                <li><Link to="/product" onClick={toggleMenu}>BrassAutoComponent</Link></li>    
                {/* Products Nav Item with Submenu */}
                <li className="submenu nav-menu">
                    <div onClick={toggleProductSubmenu} style={{ cursor: 'pointer', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Brass Hardware</span>
                        {/* You can replace this with a proper icon later */}
                        <span className={`arrow ${productSubmenuOpen ? 'up' : 'down'}`}>{productSubmenuOpen ? '▲' : '▼'}</span>
                    </div>
                    {productSubmenuOpen && menu && (
                        <ul className="submenu nav-menu" style={{ listStyleType: 'none', paddingLeft: '30px' /* Indent submenu */ }}>
                            {/* These paths assume you will set up routes like /product/brass-hardware */}
                            {/* The onClick={handleLinkClick} ensures the menu closes after navigation */}
                            <li><Link to="/brassHardware/brassBottle" onClick={handleLinkClick}>Brass Bottle</Link></li>
                            <li><Link to="/brassHardware/brassBottle" onClick={handleLinkClick}>Brass Knobs</Link></li>
                            <li><Link to="/brassHardware/brassBottle" onClick={handleLinkClick}>Lock & clinder</Link></li>
                        </ul>
                    )}
                </li>                               
                <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
                <li><Link to="/career" onClick={handleLinkClick}>Career</Link></li>                               
            </ul> 
            </div>         
      </header>
    )
}
