import { useState } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import PuppyHistoryPage from "../PuppyHistoryPage/PuppyHistoryPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/puppies/new">
              <NewPuppyPage />
            </Route>
            <Route path="/puppies">
              <PuppyHistoryPage />
            </Route>
            <Redirect to="/puppies" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
