import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './style.module.css'
import { addToBasket } from '../../store/slices/basketSlice';
import { fetchSingleProduct } from '../../store/slices/singleProductSlice';


const SingleProducPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchSingleProduct(id))
    },[dispatch, id])
    const { product } = useSelector(state => state)

    const { title, description, discont_price, price, image} = product.item

    const disc_percent = (100 - (discont_price*100/price)).toFixed(1)

    return (
        <div className={s.product_page}>
        <h1 className={s.product_title}>{title}</h1>
            <div className={s.product_card}>
                <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />
                <div className={s.product_info}>
                    <div className={s.action}>
                        <div className={discont_price ? s.prices_blok :''} >
                        {
                            discont_price ?
                            <>
                                <p className={s.disc_price}>{discont_price}<span className={s.symbol}>$</span> </p>
                                <p className={s.price}>{price}$ </p>
                                <p className={s.percent}> -{disc_percent}%</p>
                            </>
                            :  <p className={s.no_disc_price}>{price}<span className={s.symbol}>$</span> </p>
                        }
                        </div> 
                        <button onClick={()=>dispatch(addToBasket(product.item.id))} className={s.add_btn}>To cart</button>
                    </div>
                    <div className={s.product_descr}>
                        <p className={s.subtitle}>Description</p>
                        <p className={s.text}>{description}</p>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default SingleProducPage;