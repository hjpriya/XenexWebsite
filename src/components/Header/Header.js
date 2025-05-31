import React, { useState, useEffect } from 'react';
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
                { label: 'Brass Hardware', link: '/brassHardware' },
                { label: 'Brass Pipe Fitting', link: '/brassPipeFitting' }, // Example: updated link
                { label: 'Brass Auto Component', link: '/brassAutoComponent' }, // Example: updated link
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

    useEffect(() => {
        const SCRIPT_ID = 'google-translate-script';
        const WIDGET_CONTAINER_ID = 'google_translate_element';

        // Function to initialize Google Translate Element
        const googleTranslateElementInit = () => {
            // Ensure google.translate is available and the container div exists
            if (window.google && window.google.translate && document.getElementById(WIDGET_CONTAINER_ID)) {
                const container = document.getElementById(WIDGET_CONTAINER_ID);
                // Check if the widget is already initialized to prevent re-creation.
                // Google's widget typically adds a 'goog-te-gadget' class to an inner element.
                if (container && !container.querySelector('.goog-te-gadget')) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: 'en',
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false, // Keep this false to control display behavior
                        },
                        WIDGET_CONTAINER_ID
                    );
                }
            }
        };

        // Assign the init function to the window. This will be called by the Google script
        // once it's loaded, via the 'cb=googleTranslateElementInit' URL parameter.
        window.googleTranslateElementInit = googleTranslateElementInit;

        // Check if the script already exists
        if (!document.getElementById(SCRIPT_ID)) {
            const addScript = document.createElement('script');
            addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
            addScript.setAttribute('id', SCRIPT_ID);
            addScript.async = true; // Load the script asynchronously
            document.body.appendChild(addScript);
        } else {
            if (window.google && window.google.translate && typeof window.google.translate.TranslateElement === 'function') {
                googleTranslateElementInit();
            }
     }
        
        return () => {
                     if (window.googleTranslateElementInit) {
                delete window.googleTranslateElementInit;
            }
        };
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Xenex Logo" className={styles.logoImage} />
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
            <div className={styles.translateWidgetContainer}>
                <div id="google_translate_element" className={styles.googleTranslateElement}></div>
            </div>
        </header>
    );
};

export default Header;