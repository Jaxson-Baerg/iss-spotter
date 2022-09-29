import chalk from "chalk";

export const nextISSTimes = (iss) => {
  let total = "";
  for (let i = 1; i <= iss.response.length; i++) {
    let ord = ordinalify(i);
    let dateTime = new Date(iss.response[i - 1].risetime * 1000);
    total += `${i + ord} pass at:\n${chalk.blue.bold(dateTime)}\nFor:\n${chalk.yellow.bold(iss.response[i - 1].duration)} seconds!\n-----\n`;
  }
  return total;
};

const ordinalify = (num) => {
  if (num === 1 || num.toString().slice(-1) === 1) {
    return "st";
  } else if (num === 2 || num.toString().slice(-1) === 2) {
    return "nd";
  } else if (num === 3 || num.toString().slice(-1) === 3) {
    return "rd";
  } else {
    return "th";
  }
};