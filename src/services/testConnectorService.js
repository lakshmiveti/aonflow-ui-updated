import config from "../config";
const axios = require("axios");

const testConnectorService = async (data, token) => {
  let result;
  const headers = {
    "Content-Type": "application/json",
    "X-access-token": token,
  };
  await axios
    .post(`${config.apiUrl.node}/connector/test`, data, {
      headers,
    })
    .then(function (response) {
      console.log("response", response);
      result = response.data;
    })
    .catch(function (error) {
      console.log("error while add new connector", error);
      return error;
    });
  return result;
};

export default testConnectorService;
