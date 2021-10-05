import React from 'react'
import productitem from './imgProduct/productitem.png'
import arrow from './imgProduct/arrow.png'


import productitemactive1 from './imgProduct/productitemactive1.png'
import productitemactive2 from './imgProduct/productitemactive2.png'


const ProductItems = ({title, descp}) => {
    return (
        <>
            <div className={`products__item col l-4`}>
                <img src={productitemactive2} alt="" className="products__item-img__active" />
                <img src={productitemactive1} alt="" className="products__item-img__active" />

                <div className="products__item-wrap">
                    <img src={productitem} alt="" className="products__item-img" />
                    <div className="products__item-inf">
                        <h1>{title}</h1>
                        <p>{descp}</p>
                        <div className="products__item-inf__joint ">
                            <span>Joint now </span> 
                            <img src={arrow} alt="" className="products__item-inf__joint-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItems
