import { useContext } from "react";
import { Box } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

// import axios from "axios";
import { UserContext } from "./context/UserContext";
import Game from "./game";
import Rooms from "./components/Rooms";
import Login from "./components/Login";
import { SocketProvider } from "./context/SocketProvider";

import "./App.css";

function App() {
  const user = useContext(UserContext);

  if (!user.id) {
    return <Login />;
  }

  return (
    <SocketProvider id={user.id}>
      <Switch>
        <Route path="/" exact>
          <Rooms />
        </Route>
        <Route path="/game">
          <Box py={4}>
            <Game />
          </Box>
        </Route>
      </Switch>
    </SocketProvider>
  );
}

export default App;
