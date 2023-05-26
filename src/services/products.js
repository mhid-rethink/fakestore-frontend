import api from "./api";

export async function getProducts() {
  const response = await api.get("products");
  return response.data;
}

export async function getCategories() {
  const response = await api.get("products/categories");
  return response.data;
}

export async function getProductsByCategory() {
  const response = await api.get("product/category")
}