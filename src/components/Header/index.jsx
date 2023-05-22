import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './style.module.css'
import {Badge} from '@mui/material'
import { useSelector } from 'react-redux';
import MobDrawer from '../MobDrawer';


const Header = () => {
    const {basket} = useSelector(state => state)
    const totalCount = basket.data.reduce((sum, {count})=> sum + count, 0)

    const changeClass = ({isActive}) => isActive ? [s.nav_link, s.active].join(' ') : s.nav_link

    return (
        <div className={s.header}>
            <img className={s.logo} src="/images/logo.svg" alt="logo" />

            <Link to='/categories'>
                <button className={s.catalog_btn}>Catalog</button>
            </Link>
            
            <nav className={s.nav} >
                <NavLink className={changeClass} to='/'>Main Page</NavLink>
                <NavLink className={changeClass} to='/products/all'>All products</NavLink>
                <NavLink className={changeClass} to='/sales/sales_all'>All sales</NavLink>
            </nav>
            <div className={s.tooltip}>
                <Link to='/basket'>
                    <Badge badgeContent={totalCount} color="success">
                        <img className={s.basket_icon} src="/images/basket_icon.svg" alt="basket_icon" />
                    </Badge>
                </Link>
                <div className={s.burger}>
                    <MobDrawer/>
                </div>
            </div>

        </div>
    );
};

export default Header;