import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/main/Main";
import Login from "../Component/page/Login";
import Register from "../Component/page/Register";
import Dashboard from "../Component/page/dashBoard/Dashboard";
import AllStudent from "../Component/page/dashBoard/AllStudent";
import Payment from "../Component/page/dashBoard/Payment";
import Home from "../Component/page/Home/Home";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import SingleStudent from "../Component/page/dashBoard/SingleStudent";
import Profile from "../Component/page/Profile/Profile";
import ProfilePrivate from "../Component/PrivateRoute/FrofilePrivate";
import AddEvent from "../Component/page/dashBoard/Event/AddEvent";
import Event from "../Component/page/event/Event";
import DetailsEvent from "../Component/page/event/DetailsEvent";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/singeStudent/:id",
        element: <SingleStudent />,
      },
      {
        path: "/profile",
        element: (
          <ProfilePrivate>
            <Profile />
          </ProfilePrivate>
        ),
      },
      {
        path: "/detailsEvent/:id",
        element: <DetailsEvent />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <AllStudent />,
          },
          {
            path: "/dashboard/payment",
            element: <Payment />,
          },
          {
            path: "/dashboard/event",
            element: <AddEvent />,
          },
        ],
      },
    ],
  },
]);
