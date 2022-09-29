import request from "request";

export const fetchISS = (lat, lon) => {
  return new Promise((resolve, reject) => {
    request(`https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${lon}`, (error, response, body) => {
      const bodyObj = JSON.parse(body);
      if (error || !bodyObj.message) reject(`ISS could not be spotted.`);
      resolve(bodyObj);
    });
  });
};