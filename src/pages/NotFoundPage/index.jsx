import React from 'react';
import s from './style.module.css'
import image from"./not_found.png"
const NotFoundPage = () => {
    return (
        <div>
            <img className={s.img} src={image} alt="" />
        </div>
    );
};

export default NotFoundPage;