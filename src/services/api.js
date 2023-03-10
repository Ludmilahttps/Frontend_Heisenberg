import axios from "axios";

// const URL = process.env.API_URL || "http://localhost:5002";
// const URL = process.env.API_URL || "http://localhost:5002";

//DEV
// const URL = "http://localhost:5002";https://dulcestore.onrender.com
const URL = "http://localhost:5000";

export const api = axios.create({ baseURL: URL });
const TOKEN = localStorage.getItem("token");

api.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;

export function signUp(body) {
  return api.post("/sign-up", body);
}

export function signIn(body) {
  return api.post("/sign-in", body);
}

export function getProductList() {
  return api.get("/product-list");
}

export function getCart(){
  return api.get("/get-cart")
}

export function addCart(body){
  return api.post("/cart-add", body)
}

export function deleteCart(body){
  return api.post("/detele-cart", body)
}
