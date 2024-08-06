import React, { useContext, useEffect, useState } from 'react';
import image from './image.png'
import { context } from '../Apiservices/Api';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const {products}=useContext(context)

 const navigate=useNavigate()

  return (
    <div
      className="bg-cover bg-center h-full w-full bg-white">
        <img src={image} alt='/images' className='w-full h-[400px] mt-10'/>
        
        
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <div
            className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h5>
              <h5 className="text-xl font-semibold text-gray-900 mb-2"> ₹ {product.price}</h5>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <Link to={product.id}><button className='bg-blue-950 text-white rounded-md py-2 px-4 w-full hover:bg-black' >
                Product detailes
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
