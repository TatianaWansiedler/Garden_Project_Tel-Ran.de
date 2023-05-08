import React from 'react';
import s from './style.module.css'
import OrderForm from '../../components/OrderForm';
import BasketItem from '../../components/BasketItem';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BasketPage = () => {
    const {basket, products } = useSelector(state => state)
    
    const data = basket.data.map(el => {
        const product = products.data.find(({id}) => id === el.id)
        return {...el,...product}
    })

    return (
        <div className={s.basket_page}>
            <h1>Shopping cart</h1>
            <div className={s.container}>
                <div className={s.basket_items}>
                    <Link className={s.link_to_shop} to="/products/all">Back to the store &rsaquo;</Link>
                    <div>
                        {
                            data.map(el => <BasketItem key={el.id} {...el}/>)
                        }
                    </div>
                </div>
                <OrderForm/>
            </div>

        </div>
    );
};

export default BasketPage;