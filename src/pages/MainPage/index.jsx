import React from 'react';
import s from './style.module.css'
import flowers from './flowers_main_page.png'
import { Link } from 'react-router-dom'
import CategoryItem from '../../components/CategoryItem';
import { useSelector } from 'react-redux';
import DiscountForm from '../../components/DiscountForm';
import ProductItem from '../../components/ProductItem';



const MainPage = () => {
    const { categories, products } = useSelector(state => state)

    return (
        <div className={s.main_page}>
            {/* ---Postrer--- */}
            <div className={s.sale_poster}>
                <div className={s.poster_info}>
                    <h1 className={s.poster_title}>Sale </h1>
                    <h3 className={s.poster_subtitle} >New season</h3>
                    <Link to='/sales/all_sales_products'>
                        <button className={s.sale_btn}>Sale</button>
                    </Link>
                </div>
                <img src={flowers} alt="" />
            </div>
            {/* ----Catalog---- */}
            <div className={s.categories_blok}>
                <div className={s.categories_blok_header}>
                    <h2>Catalog</h2>
                    <Link className={s.catalog_link_btn} to='/categories'>
                        All categories 
                    </Link>
                </div>
                <div className={s.categories}>
                    {   
                        categories
                        .filter((_,i) => i <= 3)
                        .map(item => <CategoryItem key={item.id} {...item}/>)
                    }
                </div>
            </div>
            {/* ----Get discount----*/}

            <DiscountForm/>

            {/* ---Sale ---- */}
            <div className={s.sale_blok}>
                <h2 className={s.sale_blok_title}>Sale</h2>
                <div className={s.products_on_sale}>
                    {
                        products
                        .filter((el) => el.discont_price != null)
                        .filter((_,i)=> i < 3)
                        .map(el => <ProductItem key={el.id} {...el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;