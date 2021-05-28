import config from "../config";
const axios = require("axios");

const getConnectorListService = async (token) => {
  let result;
  const headers = {
    "Content-Type": "application/json",
    "X-access-token": token,
  };
  await axios
    .get(`${config.apiUrl.node}/connector/list`, {
      headers,
    })
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.log("error while getting connector list", error);
      return error;
    });
  return result;
};

export default getConnectorListService;
