"use strict";
let db = require("./fetch-sw");

console.log("main is in the house");
document.getElementById("header").innerHTML = "A Valentine API for You";




let button = document.getElementById("btn-planets");
button.addEventListener("click", db.api_calls.getAllPlanets);