import React from 'react';
import s from './style.module.css'


const BasketCalculation = () => {

    return (
        <form onSubmit={(e)=>e.preventDefault()} className={s.basket_form}>
            <h3 className={s.title}>Order details</h3>
            <div className={s.total_blok}>
                <p className={s.total_text}>Total</p>
                <p className={s.total_sum}>3077,00$</p>
            </div>
            <div className={s.inputs}>
                <input className={s.phone_number} type="text" name="phone" placeholder='Phone number' />
                <input className={s.order_btn} type="submit" value="Order" />
            </div>
        </form>
    );
};

export default BasketCalculation;