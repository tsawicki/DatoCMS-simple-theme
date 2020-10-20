import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { PostsList } from "./views/PostsList";
import { Post } from "./views/Post";
import { Category } from "./views/Category";
import { Search } from "./views/Search";
import { ScrollToTop } from "./helpers/ScrollToTop";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_KEY}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <Router>
        <ScrollToTop />
        <Layout>
          <Switch>
            <Route path="/search/:searchTerm">
              <Search />
            </Route>
            <Route path="/category/:slug">
              <Category />
            </Route>
            <Route path="/post/:slug">
              <Post />
            </Route>
            <Route path="/">
              <PostsList />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
