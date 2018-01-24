import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./landing_page/landing_page";
import ApplicationContainer from "./application/application_container";
import AppSuccessContainer from "./application/application_success_container";
import CodingChallengeContainer from "./coding_challenge/coding_challenge_container";
import AdminContainer from "./admin/admin_container";
export default () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/application" component={ApplicationContainer} />
    <Route exact path="/application/app_success" component={AppSuccessContainer} />
    <Route exact path="/coding_challenge/:challenge_url" component={CodingChallengeContainer} />
    <Route path="/admin" component={AdminContainer} />
  </Switch>
);
