import React from 'react';
import s from './style.module.css'
import cart from './cart_empty.svg'

const EmptyBasket = () => {
    return (
        <div className={s.container}>
            <img className={s.image} src={cart} alt="empty basket" />
            <p className={s.text} >Your cart is empty!</p>
        </div> 
    );
};

export default EmptyBasket;