import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import useAuth from "../Hooks/useAuth";

const MainLayout = () => {
  const { darkMode, setDarkMode } = useAuth();
  return (
    <div
      className={`${darkMode ? "dark:bg-[#0b1121]" : "bg-white text-black"}`}
    >
        <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto px-4">
        <div
          className="mr-6 mt-5 mb-4 sticky top-28 z-10 w-12 mx-auto"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <input type="checkbox" className="toggle" checked />
          ) : (
            <input
              type="checkbox"
              className="toggle"
              checked={() => setDarkMode(!darkMode)}
            />
          )}
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
