//Chamando minha api com o axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
