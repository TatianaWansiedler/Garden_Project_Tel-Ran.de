import React from 'react';
import s from './style.module.css'
import gnome from './gnome.png'
const DiscountForm = () => {
    return (
        <div className={s.form}>
            <div className={s.discount_item}>
                <img src={gnome} alt="gnome" />
                <div className={s.discount_form_box}>
                    <p className={s.discount_info}>
                        <span > 5% off </span> <br />
                    on the first order
                    </p>
                    <form className={s.discount_form}>
                        <div className={s.input_tel}>
                            <span>+49</span>
                            <input type="tel" />
                        </div>
                        <input className={s.submit_btn} type="submit" value="Get a discount" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DiscountForm;