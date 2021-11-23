import axios from "axios";

export default axios.create({
  baseURL: "https://programming-quotes-api.herokuapp.com/quotes",
});
