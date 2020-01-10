import React from "react";
import AppStoreProvider from "./store/AppStoreProvider";
import Routes from "./routes";

const App = () => (
  <AppStoreProvider>
    <Routes />
  </AppStoreProvider>
);

export default App;
