
import axios from "axios";

const ServicesApi = {
    loginDataApi(payload) {
        return axios.post("https://fakestoreapi.com/auth/login", payload);

    },
    getMenuCategories() {
        return axios.get("https://fakestoreapi.com/products/categories");

    },
    getProducts() {
        return axios.get("https://fakestoreapi.com/products");

    },
    getSpecProducts(cat) {
        return axios.get(`https://fakestoreapi.com/products/category/${cat}`);
    },
    getSingleProduct(id) {
        return axios.get(`https://fakestoreapi.com/products/${id}`);

    },
};

export default ServicesApi;

