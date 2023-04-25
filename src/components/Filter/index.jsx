import React, { useState, useEffect } from 'react';
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { searchByPrice, sort, filterDiscount } from '../../store/slices/productsSlice';


const Filter = () => {
    const [filters,setFilters] = useState({from:'', to:''})
    const {sales} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch( searchByPrice(filters))
    },[filters, dispatch])
    
    const onChangeFilter = (by, data) => {
        setFilters({
            ...filters,
            [by]:data
        })
    }
    const onChangeDiscount = (e) => {
        dispatch(filterDiscount(e.target.checked))
    }
    const onChangeSort = (e) => {
        dispatch(sort(+e.target.value))
    }

    return (
        <form className={s.filter_form}>
            <div className={s.inputs_price}>
                <label className={s.label}>Price</label>
                <input onChange={
                    (e)=>onChangeFilter('from', +e.target.value)} 
                    type="number" 
                    name="from" 
                    placeholder='from'
                />
                <input 
                    onChange={(e)=>onChangeFilter('to', +e.target.value)}
                    type="number" 
                    name="to" 
                    placeholder='to' />
            </div>

            {   
                !sales && (
                    <div className={s.chackbox}>
                        <label className={s.label}>Discounted items</label>
                        <input type="checkbox" name="discount"  onChange={onChangeDiscount}/>
                    </div>
                )
            }

            <div className={s.sort_options}>
                <label className={s.label}>Sorted</label>
                <select onChange={onChangeSort} defaultValue="">
                    <option value="" disabled hidden>Select option</option>
                    <option value="1">Price: Low to High</option>
                    <option value="-1">Price: High to Low</option>
                </select>
            </div>
            
        </form>
    );
};

export default Filter;