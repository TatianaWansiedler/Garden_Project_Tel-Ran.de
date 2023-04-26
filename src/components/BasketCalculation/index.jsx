import { useSelector } from 'react-redux';
import s from './style.module.css'


const BasketCalculation = () => {
    const {basket, products} = useSelector(state => state)
    // const totalCount = basket.data.reduce((sum, {count})=> sum + count, 0)

    const priceRender = () => {
        if (products.status === 'resolve'){
            return basket.data.reduce((prev,item)=>{
                const product = products.data.find(el => el.id === item.id)
                return prev + item.count * product.finalPrice
            },0)
        } else return 0
    }    

    return (
        <form onSubmit={(e)=>e.preventDefault()} className={s.basket_form}>
            <h3 className={s.title}>Order details</h3>
            <div className={s.total_blok}>
                <p className={s.total_text}>Total</p>
                <p className={s.total_sum}>{priceRender()}$</p>
            </div>
            <div className={s.inputs}>
                <input className={s.phone_number} type="text" name="phone" placeholder='Phone number' />
                <input className={s.order_btn} type="submit" value="Order" />
            </div>
        </form>
    );
};

export default BasketCalculation;