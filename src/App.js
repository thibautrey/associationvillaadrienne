import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Proprietaires from "./Proprietaires";

const categories = [
  {
    title: "Liste propriétaires",
    path: "/properties",
    component: Proprietaires,
  },
  {
    title: "Génération appel de fonds",
    path: "/quarterpayments",
    component: "",
  },
  { title: "Récupération relevé bancaire", path: "/bank", component: "" },
];

function App() {
  return (
    <Router>
      <div className="Menu">
        {categories.map(({ title, path }) => (
          <div key={path}>
            <Link to={path}>
              <Button>{title}</Button>
            </Link>
          </div>
        ))}
      </div>

      <Switch>
        {categories.map(({ path, component }) => {
          const Component = component;
          return (
            <Route key={`switch${path}`} path={path}>
              <Component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
