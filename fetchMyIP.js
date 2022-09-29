import request from "request";

export const fetchMyIP = () => {
  return new Promise((resolve, reject) => {
    request("https://api64.ipify.org?", (error, response, body) => {
      if (error) reject("IP could not be found.");
      resolve(body);
    });
  });
};