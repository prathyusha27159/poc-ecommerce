
import axios from "axios";

const ServicesApi = {
    getMenuCategories() {
        return axios.get("https://fakestoreapi.com/products/categories");
            
    },
    getProducts()  {
        return axios.get("https://fakestoreapi.com/products");
            
    },
    getSpecProducts(cat)  {
        return axios.get(`https://fakestoreapi.com/products/category/${cat}`);
    },
};

export default ServicesApi;

