import React, { useContext, useEffect, useState } from 'react'
import { GetAllproducts } from '../Apiservices/Api'
import { context } from '../Apiservices/Api'
import { Link } from 'react-router-dom'
import ProductDetailes from './ProductDetailes'

const Women = () => {
    const {products}=useContext(context)
    return (
        <div className='bg-cover bg-center h-full w-full bg-white'>
            <div className='flex flex-wrap justify-center gap-6 p-6'>

                {products.filter((item) => (item.type === "women")).map((item) => (

                    <div
                        className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden gap-6 p-6" key={item.id}

                    >
                        <img
                            src={item.image}
                            alt='product image'
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                        <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h5>
                            <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h5>
                            <h5 className="text-xl font-semibold text-gray-900 mb-2"> ₹ {item.price}</h5>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                           <Link to={item.id}> <button className='bg-blue-950 text-white rounded-md py-2 px-4 w-full hover:bg-black'>
                           Product detailes
                            </button> </Link> 
                        </div>
                    </div>

                )
                )}

            </div>
        </div>

    )
}

export default Women
