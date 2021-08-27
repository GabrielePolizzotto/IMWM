import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ViewDashboard } from "./components-view/ViewDashboard";
import { ViewLogin } from "./components-view/ViewLogin";
import { ViewSignUp } from "./components-view/ViewSignUp";
import {AuthProvider} from "./contexts/AuthContext"
import { PrivateRoute } from "./PrivateRoute";

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Switch>
            <PrivateRoute 
            //@ts-ignore
            exact path="/" component={ViewDashboard} />
            <Route exact path="/login" component={ViewLogin} />
            <Route exact path="/signup" component={ViewSignUp} />
          </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};
