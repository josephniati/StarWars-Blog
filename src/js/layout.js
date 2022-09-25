import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Cards } from "./component/Cards";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import axios from "axios";
import { CardsPlanets } from "./component/CardsPlanets";
import { CardsVehicles } from "./component/CardsVehicles";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const [people, setPeople] = useState([]);
  const getPeople = () => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => setPeople(response.data.results));
  };
  const [planets, setPlanet] = useState([]);
  const getPlanet = () => {
    axios
      .get("https://swapi.dev/api/planets")
      .then((response) => setPlanet(response.data.results));
  };

  const [vehicles, setVehicles] = useState([]);
  const getVehicles = () => {
    axios
      .get("https://swapi.dev/api/vehicles")
      .then((response) => setVehicles(response.data.results));
  };
  getPeople();
  getVehicles()
  getPlanet()
  return (
    <div>
      <h1>Hello</h1>
      {people.map((person) => {
        return <Cards person={person} />;
      })}
	  {planets.map((planet) => {
        return <CardsPlanets planet={planet} />;
      })}
	  {vehicles.map((vehicle) => {
        return <CardsVehicles vehicle={vehicle} />;
      })}
    </div>
  );

 

  
  
};

export default Layout;
