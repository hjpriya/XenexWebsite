import React, { useState } from 'react';
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

    const handleMainLinkClick = (e) => {
        // If it's a parent item with sub-items and we are on a touch device,
        // we might want to toggle the submenu instead of navigating,
        // especially if the link is '#' or just a placeholder.
        // For now, we'll let it navigate and call onLinkClick.
        if (onLinkClick) {
            onLinkClick(); // Close mobile menu
        }
        // Navigation will proceed due to href
    };

    const handleSubItemLinkClick = () => {
        if (onLinkClick) {
            onLinkClick(); // Close mobile menu
        }
        // Navigation will proceed due to href
    };

    return (
        <li
            className={`${styles.navItem} ${isSubMenuOpen ? styles.subMenuActive : ''}`} // Added a class for active sub-menu styling
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={link} className={styles.navLink} onClick={handleMainLinkClick}>
                {label}
                {subItems && subItems.length > 0 && (
                    <span className={styles.dropdownArrow}>&#9662;</span> // Down arrow
                )}
            </a>
            {subItems && subItems.length > 0 && isSubMenuOpen && (
                <ul className={styles.subMenu}>
                    {subItems.map((subItem) => (
                        <li key={subItem.label} className={styles.subMenuItem}>
                            <a href={subItem.link} className={styles.subMenuLink} onClick={handleSubItemLinkClick}>
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