import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import s from './style.module.css'
import gnome from './gnome.png'
import { fetchGetDiscount } from '../../services/discountRequest';


const DiscountForm = () => {

    const { register, handleSubmit,reset, formState:{errors, isSubmitSuccessful } } = useForm();

    const onSubmit = data => {
        fetchGetDiscount(data.phone)
            .then(res => console.log(res.status))
            .catch(err => console.log(err))
    } 

    useEffect(()=>{
        if (isSubmitSuccessful) {
            reset({ phone: '' });
          }
    },[isSubmitSuccessful, reset])

    const changeClass = () => {
       return errors.phone?.type === 'pattern' ? `${s.input_tel} ${s.reject}` : s.input_tel
    }

    return (
        <div className={s.form}>
            <div className={s.disc_item}>
                <img src={gnome} alt="gnome" />
                <div className={s.disc_form_box}>
                    <p className={s.disc_info}>
                        <span > 5% off </span> <br />
                        on the first order
                    </p>
                    <form className={s.disc_form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={changeClass()} >
                            <span>+49</span>
                            <input type='tel'  
                                {...register("phone", { required: true, pattern: /^(\d{2,4}[-\s])\d{7,10}$/})}
                                placeholder='999 99999999' 
                            />
                            {
                                errors.phone?.type === 'required' && 
                                    <p className={s.required_alert}>
                                        This field is required, please type your phone number
                                    </p>
                            } 
                        </div>
                        <input className={s.submit_btn} type="submit" value="Get a discount" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DiscountForm;