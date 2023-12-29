import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import SpacesRooms from "../Pages/SpacesRooms/SpacesRooms";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import History from "../Pages/History/History";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Business from "../Pages/Business/Business";
import AirtMusic from "../Pages/AirtMusic/AirtMusic";
import Technology from "../Pages/Technology/Technology";
import ErrPage from "../Pages/ErrPage/ErrPage";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import ReadBook from "../Pages/ReadBook/ReadBook";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "history",
        element: (
          <PrivetRoute>
            <History></History>
          </PrivetRoute>
        ),
      },
      {
        path: "business",
        element: (
          <PrivetRoute>
            <Business></Business>
          </PrivetRoute>
        ),
      },
      {
        path: "airt-music",
        element: (
          <PrivetRoute>
            <AirtMusic></AirtMusic>
          </PrivetRoute>
        ),
      },
      {
        path: "computer-tech",
        element: (
          <PrivetRoute>
            <Technology></Technology>
          </PrivetRoute>
        ),
      },
      {
        path: "add-Book",
        element: (
          <PrivetRoute>
            <AddBook></AddBook>
          </PrivetRoute>
        ),
      },
      {
        path: "all-Books",
        element: (
          <PrivetRoute>
            <AllBooks></AllBooks>
          </PrivetRoute>
        ),
      },
      {
        path: "/books/:id",
        element: (
          <PrivetRoute>
            <BookDetails></BookDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateBook></UpdateBook>
          </PrivetRoute>
        ),
      },
      {
        path: "/read/:id",
        element: (
          <PrivetRoute>
           <ReadBook></ReadBook>
          </PrivetRoute>
        ),
      },
      {
        path: "borrowed-Books",
        element: (
          <PrivetRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivetRoute>
        ),
      },
      {
        path: "spaces-rooms",
        element: (
          <PrivetRoute>
            <SpacesRooms></SpacesRooms>
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Root;
