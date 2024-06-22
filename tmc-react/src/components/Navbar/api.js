import axios from "axios";

export default (token = false) => {
  return axios.create({
    baseURL: "https://api.strapi.transworldbd.com/api/",
    headers: {
      "content-type": "application/json",
      // authorization: `Bearer ${token}`,
    },
  });
};
