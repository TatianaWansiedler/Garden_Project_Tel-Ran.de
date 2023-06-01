import React, { useEffect } from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { useDispatch } from 'react-redux'
import ProductsPage from '../../pages/ProductsPage';
import CategoriesPage from '../../pages/CategoriesPage';
import BasketPage from '../../pages/BasketPage';
import SingleProductPage from '../../pages/SingleProductPage';
import ScrollToTop from '../../helpers/ScrollToTop';
import { fetchCategories } from '../../store/slices/cateroriesSlice';
import { fetchProducts } from '../../store/slices/productsSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/categories/:categoryTitle/:categoryID' element={<ProductsPage/>}/>
        <Route path='/sales/:sales' element={<ProductsPage/>}/>
        <Route path='/products/all' element={<ProductsPage/>}/>
        <Route path='/product/:id' element={<SingleProductPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
