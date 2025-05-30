import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import styles from './HeaderNav.module.css';
import logo from './../svg/logo.png';
import Menu from './../svg/bars-solid.svg';
import Close from './../svg/times-solid.svg';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        {
            label: 'Home',
            link: '/',
        },
        {
            label: 'Products',
            link: '/products',
            subItems: [ // Ensure these links are unique and defined in App.js
                { label: 'Brass Pipe Fitting', link: '/brassPipeFitting' }, // Example: updated link
                { label: 'Brass Auto Component', link: '/product' }, // Example: updated link
                { label: 'Other Products', link: '/products/other' }, // Example: new distinct link
            ],
        },
        {
            label: 'Brass Hardware',
            link: '/brassHardware',
            subItems: [
                { label: 'Brass Bottle', link: '/brassHardware/brassBottle' }, // Existing
                { label: 'Brass Knobs', link: '/brassHardware/brassKnobs' }, // Example: new distinct link
                { label: 'Lock & Cylinder', link: '/brassHardware/lockCylinder' }, // Example: new distinct link
            ],
        },
        {
            label: 'About Us',
            link: '/about',
        },
        {
            label: 'Contact Us',
            link: '/contact',
        },
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <Link to="/" onClick={closeMobileMenu}>
                        <img src={logo} alt="Xenex Logo" className={styles.logoImage} />
                    </Link>
                </div>

                <div className={styles.burgerIcon} onClick={toggleMobileMenu}>
                    <img src={Menu} alt="Open Menu" />
                </div>

                <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <li className={styles.closeIconContainer}>
                        <div className={styles.closeIcon} onClick={toggleMobileMenu}>
                            <img src={Close} alt="Close Menu" />
                        </div>
                    </li>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.label} // Use a unique key for list items
                            label={item.label}
                            link={item.link}
                            subItems={item.subItems}
                            onLinkClick={closeMobileMenu} // To close mobile menu on any link click
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
};


export default Header;