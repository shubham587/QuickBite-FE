import axios from "axios";

const token = localStorage.getItem("token") || null
// console.log(token, "in api")
const instance = axios.create({
    baseURL: "http://127.0.0.1:5001"
})

const getAllProduct = (data) => 
    instance({
        url: "/product",
        method: "GET",
        params: data
    }).then((res) => {return res.data})
    .catch((err) => {return err})

const api = {
    getAllProduct
}

export default api