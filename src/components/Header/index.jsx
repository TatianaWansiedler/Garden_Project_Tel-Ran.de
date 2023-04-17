import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './style.module.css'

const Header = () => {

    const changeClass = ({isActive}) => isActive ? [s.nav_link, s.active].join(' ') : s.nav_link

    return (
        <div className={s.header}>
            <img className={s.logo} src="/images/logo.svg" alt="logo" />

            <Link to='/categories'>
                <button className={s.catalog_btn}>Catalog</button>
            </Link>
            
            <nav className={s.nav}>
                <NavLink className={changeClass} to='/'>Main Page</NavLink>
                <NavLink className={changeClass} to='/products/all'>All products</NavLink>
                <NavLink className={changeClass} to='/sales/all_sales_products'>All sales</NavLink>
            </nav>

            <Link to='/basket'>
                <img className={s.basket_icon} src="/images/basket_icon.svg" alt="basket_icon" />
            </Link>
        </div>
    );
};

export default Header;