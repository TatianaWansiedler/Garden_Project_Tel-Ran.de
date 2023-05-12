import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.css'
import { useForm } from "react-hook-form";
import { fetchBasketOrder } from '../../store/slices/basketSlice';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const OrderForm = () => {
    const dispatch = useDispatch()
    const {basket, products} = useSelector(state => state)
    const { register, handleSubmit,reset, formState:{errors, isSubmitSuccessful } } = useForm();
    const notify = () => toast.success('Order Successfuly Placed!', {
        autoClose: 2500,
    });

    const onSubmit = data => {
        const order = {...basket, phone: data.phone}
        dispatch(fetchBasketOrder(order))
    } 

    useEffect(()=>{
        if (isSubmitSuccessful) {
            reset({ phone: '' });
            notify()
        }
    },[isSubmitSuccessful, reset])

    const priceRender = () => {
        if (products.status === 'resolve'){
            return basket.data.reduce((prev,item)=>{
                const product = products.data.find(el => el.id === item.id)
                return prev + item.count * product.finalPrice
            },0)
        } else return 0
    }    

    const changeClass = () => {
        return errors.phone?.type && basket.data.length  ? `${s.phone_number} ${s.reject}` : s.phone_number
    }
 
    return (
        <>
            {
                !basket.data.length
                ?
                <Link to="/products/all" className={s.btn_shop}>
                    Shop Now
                </Link>
                :
                <form onSubmit={handleSubmit(onSubmit)} className={s.basket_form}>
                    <h3 className={s.title}>Order details</h3>
                    <div className={s.total_blok}>
                        <p className={s.total_text}>Total</p>
                        <p className={s.total_sum}>{priceRender()}$</p>
                    </div>
                    <div className={s.inputs}>
                        <input 
                            className={changeClass()} 
                            type="tel" 
                            name="phone" 
                            {...register("phone", { required: true, pattern: /^([+]?\d{1,2}[-\s])\d{2,4}[-\s]\d{7,10}$/})}
                            placeholder='+49 999 9999999'
                            disabled={!basket.data.length?? true } 
                        />
                        <input className={s.order_btn} type="submit" value="Order"/>
                    </div>
                </form>
            }
            <ToastContainer/>
        </>

    );
};

export default OrderForm;