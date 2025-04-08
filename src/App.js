import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllProducts } from './Api/api-product.js';

function App() {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts(); // Wait for the data
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <p>Loading products...</p>; // Show a loading message while fetching
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
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
