import request from 'superagent';

const rootUrl = "http://localhost:3000/api/v1";

export async function getAllProducts (){
  try {
    const response = await request.get(`${rootUrl}/products`);
    return response.body;
  } catch (error) {
    throw console.error('Error fetching products', error);
  }
}

export async function getAProduct (productId){
  try {
    const response = await request.get(`${rootUrl}/products/${productId}`);
    return response.body;
  } catch (error) {
    throw console.error('Error fetching products', error);
  }
}