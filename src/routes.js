import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom'
  import App from './App'
  import Home from './components/Home'
  import Products from './components/Products'
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="products/:productId" element={<Products />} />
        </Route>
      </>,
    ),
    
  )
  
  export default router