let currenthonolulu = moment()
  .tz("Pacific/Honolulu")
  .format("[It's] dddd, MMMM Do, YYYY LT [in Honolulu, Hawaii]");
let currenthonoluluElement = document.querySelector("#currenthonolulu");
currenthonoluluElement.innerHTML = currenthonolulu;

let tenyears = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format(
    "[10 years from now, it will be] dddd, MMMM Do, YYYY LTS [in Paris, France]"
  );
let tenyearsElement = document.querySelector("#tenyears");
tenyearsElement.innerHTML = tenyears;

let currenttimezone = moment.tz.guess();
let currenttimezoneElement = document.querySelector("#currenttimezone");
currenttimezoneElement.innerHTML = `Your current time zone is ${currenttimezone} and the current time is ${moment().format(
  "dddd, MMMM Do, YYYY LTS"
)}`;
