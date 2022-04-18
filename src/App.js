import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SaveNotes from "./components/SaveNotes/SaveNotes";
import Auth from "./components/Auth/Auth";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/savenotes" component={SaveNotes} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
