import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Login from "./HomeScreen/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const user = "null";
  return (
    <div className="app">
      {/* <HomeScreen /> */}
      <Router>
        {!user ? (<Login/>)
          :(<Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch> )
        }
      </Router>
      {/* <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch> 
      </Router> */}
    </div>
  );
}

export default App;
