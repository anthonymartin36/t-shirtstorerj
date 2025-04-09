import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools' <ReactQueryDevtools />

import router from './routes' 
import App from './App'

//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
//const domain = process.env.REACT_APP_AUTH0_DOMAIN
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app')).render(
    
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} future={{v7_relativeSplatPath: true, v7_startTransition: true}} />        
        <App />
      </QueryClientProvider>
  )
})