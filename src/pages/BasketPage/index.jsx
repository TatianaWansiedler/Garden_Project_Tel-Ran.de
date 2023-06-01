import React, { useEffect } from 'react';
import s from './style.module.css'
import OrderForm from '../../components/OrderForm';
import BasketItem from '../../components/BasketItem';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EmptyBasket from '../../components/EmptyBasket';

const BasketPage = () => {
    const {basket, products } = useSelector(state => state)
    
    const data = basket.data.map(el => {
        const product = products.data.find(({id}) => id === el.id)
        return {...el,...product}
    })
    useEffect(() => {
        document.title = "Cart"
    },[])

    return (
        <div className={s.basket_page}>
            <h1>Shopping cart</h1>
                <div className={s.container}> 
                    {
                        basket.data.length ? 
                        <div className={s.basket_items}>
                            <Link className={s.link_to_shop} to="/products/all">
                                Back to the store &rsaquo;
                            </Link>
                            <div>
                                {
                                    data.map(el => <BasketItem key={el.id} {...el}/>)
                                }
                            </div>
                        </div> 
                        : <EmptyBasket/>
                    }            
                    <OrderForm/>
                </div>
        </div>
    );
};

export default BasketPage;