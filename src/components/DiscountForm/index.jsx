import React from 'react';
import { useForm } from "react-hook-form";
import s from './style.module.css'
import gnome from './media/gnome.png'
import icon1 from './media/icon1.svg'
import { fetchGetDiscount } from '../../services/discountRequest';


const DiscountForm = () => {

    const { register, handleSubmit, formState:{errors, isSubmitSuccessful } } = useForm();

    const onSubmit = data => {
        fetchGetDiscount(data.phone)
            .then(res => console.log(res.status))
            .catch(err => console.log(err))
    } 

    const changeClass = () => {
       return errors.phone?.type === 'pattern' ? `${s.input_tel} ${s.reject}` : s.input_tel
    }

    return (
        <div className={s.form}>
            <div className={s.disc_item}>
                <img className={s.gnome} src={gnome} alt="gnome" />
                {
                    !isSubmitSuccessful ?
                    <div className={s.disc_form_box}>
                        <p className={s.disc_info}>
                            <span > 5% off </span> <br />
                            on the first order
                        </p>
                        <form className={s.disc_form} onSubmit={handleSubmit(onSubmit)}>
                            <input className={changeClass()} type='tel'  
                                {...register("phone", { required: true,pattern: /^([+]?\d{1,2}[-\s])\d{2,4}[-\s]\d{7,10}$/})}
                                placeholder='+49 999 9999999'
                            />
                            {
                                errors.phone?.type === 'required' && 
                                    <p className={s.required}>
                                        This field is required, please type your phone number
                                    </p>
                            } 
                            <input className={s.submit_btn} type="submit" value="Get a discount" />
                        </form>
                    </div>  
                    : 
                    <div className={s.notification}>
                        <img className={s.notif_icon} src={icon1} alt="sms_notification"/>
                        <p className={s.notif_text} >We`ve sent a sms with a discount coupon to your mobile phone!</p>
                    </div>
                }

            </div>
        </div>
    );
};

export default DiscountForm;