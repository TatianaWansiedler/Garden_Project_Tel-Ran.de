import React, { useState, useEffect } from 'react';
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import {  useLocation, useParams } from 'react-router-dom';
import { searchByPrice, sort, filterDiscount, resetFilter } from '../../store/slices/productsSlice';


const Filter = () => {
    const [filters,setFilters] = useState({from:'', to:''})
    const [discount, setDiscount] = useState(false)
    const {sales} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(()=>{
        dispatch( searchByPrice(filters))

    },[filters, dispatch])

    useEffect(()=>{
        dispatch(resetFilter())
        dispatch(filterDiscount(false))
        setDiscount(false)
        filters.from = ''
        filters.to = ''
    },[location, dispatch])

    const onChangeFilter = (by, data) => {
        setFilters({
            ...filters,
            [by]:data
        })
    }
    const onChangeDiscount = (e) => {
        setDiscount(e.target.checked)
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
                    value={filters.from ? filters.from : '' }
                />
                <input 
                    onChange={(e)=>onChangeFilter('to', +e.target.value)}
                    type="number" 
                    name="to" 
                    placeholder='to' 
                    value={filters.to ? filters.to : '' }
                    />
            </div>

            {   
                !sales && (
                    <div className={s.chackbox}>
                        <label className={s.label}>Discounted items</label>
                        <input type="checkbox" name="discount" checked={discount} onChange={onChangeDiscount}/>
                    </div>
                )
            }

            <div className={s.sort_options}>
                <label className={s.label}>Sorted</label>
                <select onChange={onChangeSort} defaultValue='0'>
                    <option value="0" disabled hidden>Select option</option>
                    <option value="1">Price: Low to High</option>
                    <option value="-1">Price: High to Low</option>
                </select>
            </div>
            
        </form>
    );
};

export default Filter;