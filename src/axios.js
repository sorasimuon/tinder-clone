import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-bck.herokuapp.com/",
});

export default instance;
