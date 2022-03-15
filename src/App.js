import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Departments from "./pages/departments";
import Home from "./pages/home";
import Library from "./pages/library";
import NotFound from "./pages/NotFound";
import Connect from "./pages/connect";
import "./css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/departments" component={Departments} />
          <Route path="/library" component={Library} />
          <Route path="/connect" component={Connect} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
