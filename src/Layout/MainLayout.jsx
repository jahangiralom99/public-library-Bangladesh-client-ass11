import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [hide, setHide] = useState(true);
  return (
    <div  data-theme={`${hide ? "light" : "dark"}`} className="max-w-screen-xl mx-auto p-2 ">
      <Navbar></Navbar>
      <div
        className="mr-6 mt-5 mb-4 sticky top-28 z-10 w-12 mx-auto"
        onClick={() => setHide(!hide)}
      >
        {hide ? (
          <input type="checkbox" className="toggle" checked />
        ) : (
          <input
            type="checkbox"
            className="toggle"
            checked={() => setHide(!hide)}
          />
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
