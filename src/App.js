import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default App;
