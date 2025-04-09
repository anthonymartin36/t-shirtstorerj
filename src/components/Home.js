
//import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import logo from '../logo.svg';
import '../App.css';
import { getAllProducts } from '../api/api-product.js';
import { Link } from 'react-router-dom';

function Home() {
  //const [loading, setLoading] = useState(true); // State to handle loading
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return getAllProducts()
    },
  })


  if (isError) {
    return <p>Something's broken!</p>
  }
  if (isLoading) {
    return <p>Loading products...</p> // Show a loading message while fetching
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <p>
                <Link to={`products/${product.id}`} >{product.description}</Link>
              </p>

            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
        
      </header>
    </div>
  );
}

export default Home;
