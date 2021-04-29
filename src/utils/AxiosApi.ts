import axios from "axios";

const fbToken = "10223511453527327";

export const AxiosApi = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/superheroapi.com/api/${fbToken}/`,
});
