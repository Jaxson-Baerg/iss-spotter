import chalk from "chalk";
import { fetchMyIP } from "./fetchMyIP.js";
import { fetchGeo } from "./fetchGeo.js";
import { fetchISS } from "./fetchISS.js";
import { nextISSTimes } from "./nextISSTimes.js";

let ip;
let cords;
let iss;

const main = async() => {
  ip = await fetchMyIP();
  cords = await fetchGeo(ip);
  iss = await fetchISS(cords.latitude, cords.longitude);
};

main()
  .then(() => {
    console.log(`Your IP is:\n${chalk.hex("#8302bf").bold(ip)}\n`);
    console.log(`Your coordinates are:\nArea: ${chalk.blue(cords.city)}, ${chalk.bgRed(cords.region_code)}\nLatitude: ${chalk.green(cords.latitude)}\nLongitude: ${chalk.green(cords.longitude)}\n`);
    console.log(`The ISS flyover data:\n${nextISSTimes(iss)}`);
  })
  .catch((error) => {
    console.log(`Error Occurred:\n${chalk.red.bold(error)}`);
  });