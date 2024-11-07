import axios from "axios";

const token = localStorage.getItem("token") || null;
// console.log(token, "in api")
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001",
});

const getAllProduct = (data) =>
  instance({
    url: "/product",
    headers: {
        Authorization: `Bearer ${token}`,
    },
    method: "GET",
    params: data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

const getProduct = (apiParam) =>
  instance({
    method: "GET",
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`
    // },
    url: "/product",
    params: apiParam,
  });

const getJWT = (formData) =>
  instance({
    method: "POST",
    url: "/login",
    params: formData,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err, "in api");
      return err;
    });

const postUser = (userData) =>
  instance({
    method: "POST",
    url: "/signup",
    params: userData,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

const logoutUser = () =>
  instance({
    method: "POST",
    url: "/logout",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

const getUserName = (data) =>
  instance({
    method: "get",
    url: "/get_username",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      // "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
    },
    params: data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

const getFavData = (data) =>
  instance({
    method: "GET",
    url: "/get_fav",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    params: data,
  })
    .then((res) => {
      console.log(res.json());
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

const getUserInfo = (token) =>
  instance({
    method: "GET",
    url: "/user",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      // console.log("get_user", res)
      return res;
    })
    .catch((err) => {
      console.log("get_user_err", err);
      return err;
    });

const addFavItem = (id) =>
  instance({
    method: "POST",
    url: "/user",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    params: {
      prod_id: id,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return `Fav item is not added ${err}`;
    });

const removeFavItem = (id) =>
  instance({
    method: "DELETE",
    url: "/user",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    params: {
      prod_id: id,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return `Fav item is not removed ${err}`;
    });

const getFavProduct = () =>
  instance({
    url: "/get_fav_list",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("fav_prod", res.data);
      return res.data;
    })
    .catch((err) => {
      return err;
    });
const api = {
  getAllProduct,
  getProduct,
  getUserInfo,
  getJWT,
  postUser,
  logoutUser,
  getUserName,
  getFavData,
  addFavItem,
  removeFavItem,
  getFavProduct,
};

export default api;
