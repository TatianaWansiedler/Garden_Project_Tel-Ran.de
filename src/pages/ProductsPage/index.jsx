import React from 'react';
import s from './style.module.css'
import ProductItem from '../../components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Filter from '../../components/Filter/'
import { useEffect } from 'react';
import { productsResetFilterAction } from '../../store/reducer/productsReducer';


const ProductsPage = () => {
    const {title, id, sales } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productsResetFilterAction())
    },[dispatch])

    const products = useSelector(({products}) => {
        if(sales){
            return products.filter(el => !!el.discont_price)
        }
        return id ? products.filter(({categoryId})=> +id === categoryId) : products
    })

    const titleRender = () => {
        if(title) {
            return title
        } else if (sales){
            return "Products with sale"
        } else return "All products"
    }

    return (
        <div className={s.products_page}>
            <h1 className={s.title}>{titleRender()}</h1>
            <Filter/>
            <div className={s.products_container}>
                {
                   products
                   .filter(({show}) => show )
                   .filter(({discount}) => discount )
                   .map(el => <ProductItem key={el.id} {...el}/>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;