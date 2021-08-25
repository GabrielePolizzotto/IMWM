import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ViewDashboard } from "./components-view/ViewDashboard";
import { ViewHome } from "./components-view/ViewHome";
import { ViewLogin } from "./components-view/ViewLogin";
import { ViewSignUp } from "./components-view/ViewSignUp";

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ViewHome} />
        <Route exact path="/login" component={ViewLogin} />
        <Route exact path="/signup" component={ViewSignUp} />
        <Route exact path="/dashboard" component={ViewDashboard} />
      </Switch>
    </BrowserRouter>
  );
};
