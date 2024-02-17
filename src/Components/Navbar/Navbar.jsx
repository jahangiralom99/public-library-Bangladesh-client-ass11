import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import Button from "../ui/Button";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, isOpen] = useState(true);
  const { user, logOut } = useAuth();

  const handleLogOut = async () => {
    const tostId = toast.loading("logged outing........");
    // console.log("fgdsgf");
    try {
      await logOut();
      toast.success("user logged out", { id: tostId });
    } catch (err) {
      // console.log(err);
      toast.error(err.message, { id: tostId });
    }
  };

  return (
    <nav className="bg-base-200 p-3">
      <div className="flex justify-between  items-center shadow-sm p-2 sticky top-0 z-10 mx-auto max-w-screen-xl">
        <div>
          <Link to="/">
            <img src="https://i.postimg.cc/htf60jtr/Civic-Hub-3.png" alt="" />
          </Link>
        </div>
        <div className="md:hidden">
          <div onClick={() => isOpen(!open)} className="md:hidden text-white">
            {open ? (
              <FaAlignJustify className="text-4xl " />
            ) : (
              <BsXLg className="text-4xl hover:duration-500 hover:rotate-180"></BsXLg>
            )}
          </div>
          <div
            //   For Phone devices
            className={`duration-1000 absolute delay-1000 ${
              open ? "hidden" : "w-full left-1 top- delay-1000 z-10 text-3xl"
            } `}
          >
            <div className="flex flex-col justify-center  gap-4 bg-[#1b1b1b] items-center text-white h-screen ">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl"
                    : "text-[#b7b7b7] hover:text-red-400  p-2"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/add-Book"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl"
                    : "text-[#b7b7b7] hover:text-red-400  p-2 rounded-sm"
                }
              >
                Add Book
              </NavLink>
              <NavLink
                to="/all-Books"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl"
                    : "text-[#b7b7b7] hover:text-red-400  p-2 rounded-sm"
                }
              >
                All Books
              </NavLink>
              <NavLink
                to="/borrowed-Books"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl"
                    : "text-[#b7b7b7] hover:text-red-400 rounded-sm"
                }
              >
                Borrowed Books
              </NavLink>
              <NavLink
                to="/spaces-rooms"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl "
                    : "text-[#b7b7b7] hover:text-red-400 p-2 rounded-sm"
                }
              >
                Spaces Rooms
              </NavLink>
              {!user?.email ? (
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active font-bold btn btn-link text-red-500 text-xl "
                      : "text-[#b7b7b7] hover:text-red-400 p-2 rounded-sm"
                  }
                >
                  Login
                </NavLink>
              ) : (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-96 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user ? user?.photoURL : ""}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">{user?.email}</a>
                    </li>
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <div onClick={handleLogOut} className="">
                      <Button className="text-xl">LogOut</Button>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden items-center md:block space-x-3 p-3">
          {/* Side bar for Pc*/}
          <div className="flex items-center j">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active font-bold btn btn-link text-red-500 "
                  : "text-[#b7b7b7] hover:text-red-400 p-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/add-Book"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active font-bold btn btn-link text-red-500 "
                  : "text-[#b7b7b7] hover:text-red-400 p-2"
              }
            >
              Add Book
            </NavLink>
            <NavLink
              to="/all-Books"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active font-bold btn btn-link text-red-500"
                  : "text-[#b7b7b7] hover:text-red-400 p-2"
              }
            >
              All Books
            </NavLink>
            <NavLink
              to="/borrowed-Books"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active font-bold btn btn-link text-red-500"
                  : "text-[#b7b7b7] hover:text-red-400 p-2"
              }
            >
              Borrowed Books
            </NavLink>
            <NavLink
              to="/spaces-rooms"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active font-bold btn btn-link text-red-500"
                  : "text-[#b7b7b7] hover:text-red-400 p-2"
              }
            >
              Spaces Rooms
            </NavLink>
            {!user?.email ? (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500"
                    : "text-[#b7b7b7] hover:text-red-400 p-2"
                }
              >
                Login
              </NavLink>
            ) : (
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user ? user?.photoURL : ""}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">{user?.email}</a>
                  </li>
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <div onClick={handleLogOut} className="">
                    <Button className="text-xl">LogOut</Button>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
