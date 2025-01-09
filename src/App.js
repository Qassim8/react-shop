import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CombinedProvider from "./context/CombinedProvider";

function App() {
  return (
    <CombinedProvider>
      <Header />
      <Outlet />
      <Footer />
    </CombinedProvider>
  );
}

export default App;
