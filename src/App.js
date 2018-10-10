import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom"

import NavBar from "./Components/NavBar/Navbar"
import Shop from "./Components/Shop/Shop"
import Cart from "./Components/Cart/Cart"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/Cart" component={Cart} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;