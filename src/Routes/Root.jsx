import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import SpacesRooms from "../Pages/SpacesRooms/SpacesRooms";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Root = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "add-Book",
                element: <AddBook></AddBook>
            },
            {
                path: "all-Books",
                element: <AllBooks></AllBooks>
            },
            {
                path: "borrowed-Books",
                element: <BorrowedBooks></BorrowedBooks>
            },
            {
                path: "spaces-rooms",
                element: <SpacesRooms></SpacesRooms>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    }
])

export default Root;