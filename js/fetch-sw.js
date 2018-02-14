"use strict";
console.log("fetch-sw is in the house");

let dom = require("./dom-stuff");

let api_calls = {};
let base = "https://swapi.co/api"; //set variable to api
let planets = [];

api_calls.getAllPlanets = () =>{
    console.log("tryna get them planets");
    // XML method in JavaScript expects open, send, listener
    let planetXHR = new XMLHttpRequest();
    
    planetXHR.addEventListener("load", function (){
        let data = JSON.parse(this.responseText); 
        console.log("data in call", data);
        planets = data.results;
        ///show the planets
        // dom.showPlanets(planets);
        planets.map(dom.populatePage);
    });
//error event listener
    planetXHR.addEventListener("error", function (){
        console.log("you have an error with the XHR call- check spelling");
    });

    planetXHR.open("GET", `${base}/planets`); //use tsl to "GET" https://swapi.co/api/planets
    planetXHR.send();//send event listener
};

api_calls.getPlanets = () => {
    return planets;
};

module.exports = { api_calls };
