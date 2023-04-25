import React, { useEffect } from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import {useDispatch} from 'react-redux'
import { asyncCategoriesLoadAction } from '../../store/asyncActions/categories';
import ProductsPage from '../../pages/ProductsPage';
import { asyncProductsLoadAction } from '../../store/asyncActions/products';
import CategoriesPage from '../../pages/CategoriesPage';
import BasketPage from '../../pages/BasketPage';
import SingleProducPage from '../../pages/SingleProductPage';
import ScrollToTop from '../../helpers/ScrollToTop';


function App() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(asyncCategoriesLoadAction)
    dispatch(asyncProductsLoadAction)
  },[dispatch])

  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/products/all' element={<ProductsPage/>}/>
        <Route path='/categories/:title/:id' element={<ProductsPage/>}/>
        <Route path='/sales/:sales' element={<ProductsPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/products/:id' element={<SingleProducPage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
