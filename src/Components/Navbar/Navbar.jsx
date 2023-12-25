import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [open, isOpen] = useState(true);

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
          <div className="flex flex-col gap-4 bg-[#1b1b1b] items-center text-white h-screen justify-center">
            <div className="flex gap-20">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl"
                    : "text-[#b7b7b7] hover:text-red-400 hover:border p-2"
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
                    : "text-[#b7b7b7] hover:text-red-400 hover:border p-2 rounded-sm"
                }
              >
                Add Book
              </NavLink>
            </div>
            <div className="flex gap-20">
              <NavLink
                to="/all-Books"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl"
                    : "text-[#b7b7b7] hover:text-red-400 hover:border p-2 rounded-sm"
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
                    : "text-[#b7b7b7] hover:text-red-400 hover:border-2 rounded-sm"
                }
              >
                Borrowed Books
              </NavLink>
            </div>
            <div className="flex flex-col gap-4 -ml-8">
              <NavLink
                to="/spaces-rooms"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl -ml-8"
                    : "text-[#b7b7b7] hover:text-red-400 hover:border p-2 rounded-sm"
                }
              >
                Spaces Rooms
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active font-bold btn btn-link text-red-500 text-xl"
                    : "text-[#b7b7b7] hover:text-red-400  p-2 rounded-sm"
                }
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block space-x-3 p-3 ">
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
              ? "active font-bold btn btn-link text-red-500"
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
      </div>
    </div>
  );
};

export default Navbar;
