import {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Styles} from "../styles/styles";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles/>
      <Header/>
      <Switch>
        <Route
          path={["/", "/home"]}
          exact={true}>
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Suspense>
  );
};

export default Router;
