import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {/* if not a user show login page  */}
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              {/* react router -> main content */}
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>

                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
