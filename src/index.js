import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { IndexRoute, Router, Route, browserHistory } from "react-router";
import DevTools from "./redux-dev-tools";
import reducers from "./reducers";


let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(
    reducers,
    undefined,
    compose(applyMiddleware(reduxThunk), DevTools.instrument())
  );

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      return store.replaceReducer(require("./reducers")["default"]);
    });
  }

} else {
  store = createStore(reducers, undefined, applyMiddleware(reduxThunk));
}


import ApplicationRoute from "./routes/application";
import ApplicationIndexRoute from "./routes/application-index";
import NotFoundRoute from "./routes/not-found";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={ApplicationRoute}>
      <IndexRoute component={ApplicationIndexRoute} />
      <Route path="*" component={NotFoundRoute} />
    </Route>
  </Router>
);


const applicationElement = document.querySelector("#application");

render(
  <Provider store={store}>
    {process.env.NODE_ENV === "development" ?
      <div>
        {routes}
        <DevTools />
      </div>
    :
      routes
    }
  </Provider>,
  applicationElement
);
