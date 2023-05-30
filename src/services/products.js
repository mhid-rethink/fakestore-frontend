import api from "./api";

export async function getProducts() {
  const response = await api.get("products");
  return response.data;
}

export async function getProductById(id) {
  const response = await api.get(`products/${id}`);
  return response.data;
}

export async function getProductByName(name) {
  const response = await api.get(`products/${name}`);
  return response.data;
}

export async function getCategories() {
  const response = await api.get("products/categories");
  return response.data;
}

export async function getProductsByCategory(category) {
  const response = await api.get(`products/category/${category}`);
  return response.data;
}
