import request from "request";

export const fetchGeo = (ip) => {
  return new Promise((resolve, reject) => {
    request(`http://ipwho.is/${ip}`, (error, response, body) => {
      const bodyObj = JSON.parse(body);
      if (error || !bodyObj.success) reject(`Coordinates could not be found.`);
      resolve(bodyObj);
    });
  });
};