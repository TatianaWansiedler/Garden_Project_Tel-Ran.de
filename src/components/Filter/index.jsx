import React, { useState, useEffect } from 'react';
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import {productsFilerActions, productsSortActions} from '../../store/reducer/productsReducer'
import { useParams } from 'react-router-dom';



const Filter = () => {
    const [filters,setFilters]=useState({from:'', to:''})
    const {sales} = useParams()
    const dispatch = useDispatch()   
 
    const onChange = (e) => {
        dispatch(productsSortActions(+e.target.value))
    }

    const onChangeFilter = (by, data) => {
        setFilters({
            ...filters,
            [by]:data
        })
    }

    useEffect(()=>{
        dispatch(productsFilerActions(filters))
    },[filters])

    return (
        <form className={s.filter_form}>
            <div className={s.inputs_price}>
                <label className={s.label}>Price</label>
                <input onChange={(e)=>onChangeFilter('from', +e.target.value)} type="number" name="from" placeholder='from' />
                <input onChange={(e)=>onChangeFilter('to', +e.target.value)} type="number" name="to" placeholder='to' />
            </div>

            {   sales ? ""
                : <div className={s.chackbox}>
                    <label className={s.label}>Discounted items</label>
                    <input type="checkbox" name="discount" />
                 </div>
            }

            <div className={s.sort_options}>
                <label className={s.label}>Sorted</label>
                <select onChange={onChange}>
                    <option >by default</option>
                    <option value="1">price up</option>
                    <option value="2">price down</option>
                </select>
            </div>

            
        </form>
    );
};

export default Filter;