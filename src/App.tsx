import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

export const App: React.FC = () => {
  const [userData, setUserData] = React.useState<string | null>("");
  React.useEffect(() => {
    setUserData(localStorage.getItem("token"));
  }, []);

  return (
    <Router>
      <Navbar userData={userData} setUserData={setUserData} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUserData={setUserData} />}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};
