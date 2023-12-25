import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const [open, isOpen] = useState(true);
  const { user } = useAuth();

  return (
    <div className="flex justify-between bg-base-200 items-center shadow-sm p-2 sticky top-0 z-10">
      <div>
        <Link to="/">
          <img src="https://i.postimg.cc/htf60jtr/Civic-Hub-3.png" alt="" />
        </Link>
      </div>
      <div className="md:hidden">
        <div onClick={() => isOpen(!open)} className="md:hidden">
          {open ? (
            <FaAlignJustify className="text-4xl" />
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
            <div className="flex items-end gap-20 ">
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
            </div>
            <div className="flex items-end gap-20">
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
            </div>
            <div className="flex flex-col justify-start gap-4 ">
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
              {!user?.email ? <NavLink
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
              </NavLink> : <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block space-x-3 p-3">
        {/* Side bar for Pc*/}
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
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// <div className="dropdown dropdown-end">
//         <div
//           tabIndex={0}
//           role="button"
//           className="btn btn-ghost btn-circle avatar"
//         >
//           <div className="w-10 rounded-full">
//             <img
//               alt="Tailwind CSS Navbar component"
//               src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//             />
//           </div>
//         </div>
//         <ul
//           tabIndex={0}
//           className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
//         >
//           <li>
//             <a className="justify-between">Profile</a>
//           </li>
//           <li>
//             <a>Settings</a>
//           </li>
//           <li>
//             <a>Logout</a>
//           </li>
//         </ul>
//       </div>
