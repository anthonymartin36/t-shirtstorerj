import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { getAProduct } from '../api/api-product.js';

export default function Products() {
    const { productId } = useParams()
    const {
        data: product,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['products'],
        queryFn: () => {
          return getAProduct(productId)
        },
      })

    if (isError) {
      return <p>Something's broken!</p>
    }
    if (isLoading) {
      return <p>Loading products...</p> // Show a loading message while fetching
    }
    
    return (
        <div>
            <h1>Product {product.id}</h1>
            <p>Details about product {product.description} go here.</p>
        </div>
    )
}