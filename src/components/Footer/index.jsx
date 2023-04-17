import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.info}>
                <div className={s.contact}>
                    <h3 className={s.title}>Contact</h3>
                    <p className={s.tel_number}>+49 999 999 99 99</p>
                    <div className={s.icons}>
                        <Link className={s.icon_item} to={''}>
                            <img src="/images/insta_icon.svg" alt="social_networks" />
                            <p>Instagram</p>
                        </Link>
                        <Link className={s.icon_item} to={''}>
                            <img src="/images/WU_icon.svg" alt="social_networks" />
                            <p>WhatsApp</p>
                        </Link>
                    </div>
                </div>
                <div className={s.address}>
                    <h3 className={s.title}>Address</h3>
                    <Link className={s.link_address} to='https://www.google.com/search?q=telranDE'> 
                        Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
                    </Link>
                    <div>
                        <p className={s.schedule}> Working Hours:</p>
                        <p className={s.schedule_time}> 24 hours a day</p>
                    </div>
                </div>
            </div>
            <div className={s.map}>
                <iframe title="tel_ran" frameBorder="0" width="100%" height="450px" src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010785%20Berlin+(tel_ran)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
            </div>
        </div>
    );
};

export default Footer;