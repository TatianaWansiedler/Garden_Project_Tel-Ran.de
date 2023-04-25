import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/slices/basketSlice';
const ProductItem = ({id,title, price, discont_price,image}) => {
    const dispatch =useDispatch()

    const link = `/products/${id}`
    const disc_percent = (100 - (discont_price*100/price)).toFixed(1)
    
    const onClickAdd = (e) => {
        e.preventDefault();
        dispatch(addToBasket(id))
    }

    return (
        <Link className={s.product_item} to={link}>
            <div className={s.picture}>
                <img src={`http://localhost:3333${image}`} alt={title} />
                <button onClick={onClickAdd} className={s.add_btn}>Add to cart</button>
            </div>
            <div className={discont_price ? s.prices_blok :''} >
                {
                    discont_price ?
                    <>
                        <p className={s.disc_price}>{discont_price}<span className={s.small_text}>$</span> </p>
                        <p className={s.price}>{price}$ </p>
                        <p className={s.percent}> -{disc_percent}%</p>
                    </>
                    :  <p className={s.no_disc_price}>{price}<span className={s.small_text}>$</span> </p>
                }
            </div> 
            <p className={s.product_name}>{title}</p>
           
        </Link>
        
    );
};

export default ProductItem;