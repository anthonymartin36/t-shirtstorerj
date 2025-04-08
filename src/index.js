// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createRoot } from 'react-dom/client'
//import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools' <ReactQueryDevtools />
// import router from './routes' <RouterProvider router={router} /> 

import App from './App'

//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
//const domain = process.env.REACT_APP_AUTH0_DOMAIN
const queryClient = new QueryClient()
console.log(document.getElementById('app')); 

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app')).render(
    
      <QueryClientProvider client={queryClient}>
        
        <App />
        
      </QueryClientProvider>
  )
})