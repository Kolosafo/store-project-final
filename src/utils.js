import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";
export const ALLOWED_CATEGORIES = {
  WOMENS: "women's clothing",
  MENS: "men's clothing",
};

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const fetchCategoryProducts = async (_category) => {
  const response = await axios.get(
    `${BASE_URL}/products/category/${_category}`
  );
  return response.data;
};

export const authenticateUser = async (email, password) => {
  const response = await axios.get(`${BASE_URL}/users`);
  const authenticate = response.data.find(
    (user) => user.email === email && user.password === password
  );
  return authenticate;
};
