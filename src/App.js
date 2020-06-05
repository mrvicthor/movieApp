import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Movie from "./components/movie";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <NavBar />
      <main className="container mt-3">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movie} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
