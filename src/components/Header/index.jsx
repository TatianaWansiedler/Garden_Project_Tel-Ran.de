import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './style.module.css'
import {Badge} from '@mui/material'
import { useSelector } from 'react-redux';
import logo from './logo.svg'
import icon from './basket_icon.svg'

const Header = () => {
    const links = useRef()
    const burger = useRef()

    const {basket} = useSelector(state => state)
    const totalCount = basket.data.reduce((sum, {count})=> sum + count, 0)

    const changeClass = ({isActive}) => isActive ? [s.nav_link, s.active].join(' ') : s.nav_link

    const menuHandler = () => {
        links.current.classList.toggle(s.nav_open)
        burger.current.classList.toggle(s.active)
    }

    return (
        <header className={s.header}>
            <Link to='/'>
                <img className={s.logo} src={logo} alt="logo" />
            </Link>
            <Link to='/categories'>
                <button className={s.catalog_btn}>Catalog</button>
            </Link>
            <nav className={s.nav} ref={links} >
                <NavLink className={changeClass} onClick={menuHandler} to='/'>Main Page</NavLink>
                <NavLink className={changeClass} onClick={menuHandler} to='/products/all'>Products</NavLink>
                <NavLink className={changeClass} onClick={menuHandler} to='/categories'>Catalog</NavLink>
                <NavLink className={changeClass} onClick={menuHandler} to='/sales/sales_all'>Sales</NavLink> 
            </nav>
            <div className={s.icons}>
                <Link to='/basket'>
                    <Badge badgeContent={totalCount} color="success">
                        <img className={s.basket_icon} src={icon} alt="basket_icon" />
                    </Badge>
                </Link>
                <div className={s.burger} onClick={menuHandler}>
                    <span ref={burger} ></span>
                </div>
            </div>
        </header>
    );
};

export default Header;