import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-bck.herokuapp.com/",
  // baseURL: "http://localhost:8001/",
});

export default instance;
