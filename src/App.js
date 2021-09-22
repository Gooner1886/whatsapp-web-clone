import classes from "./App.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className={classes.app}>
      {!user ? (
        <Login />
      ) : (
        <div className={classes.body}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Sidebar />
              </Route>
              <Route path="/rooms/:roomId" exact>
                <Sidebar />
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
