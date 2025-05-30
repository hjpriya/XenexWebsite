import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = ({ label, link, subItems, onLinkClick }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleMouseEnter = () => { // For desktop hover
        if (subItems && subItems.length > 0) {
            setIsSubMenuOpen(true);
        }
    };

    const handleMouseLeave = () => {
        setIsSubMenuOpen(false);
    };

    return (
        <li
            className={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={link} className={styles.navLink}>
                {label}
                {subItems && subItems.length > 0 && (
                    <span className={styles.dropdownArrow}>&#9662;</span> // Down arrow
                )}
            </a>
            {subItems && subItems.length > 0 && isSubMenuOpen && (
                <ul className={styles.subMenu}>
                    {subItems.map((subItem) => (
                        <li key={subItem.label} className={styles.subMenuItem}>
                            <a href={subItem.link} className={styles.subMenuLink}>
                                {subItem.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavItem;