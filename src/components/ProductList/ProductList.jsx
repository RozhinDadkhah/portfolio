import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ea magni ut neque unde, obcaecati quisquam alias animi. Quasi temporibus autem vero dolorum vel neque tenetur, soluta aspernatur cumque aut.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product img={item.img} key={item.id} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
