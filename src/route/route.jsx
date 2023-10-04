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
import AdminRoute from "../Component/PrivateRoute/AdminRoute";
import AboutPage from "../Component/page/About/About";
import AllAdmin from "../Component/page/dashBoard/AllAdmin";
import AlumniStudent from "../Component/page/dashBoard/AlumniStudent";
import CurrentStudent from "../Component/page/dashBoard/CurrentStudent";

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
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/aboutPage",
        element: <AboutPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/allStudent",
            element: (
              <AdminRoute>
                <AllStudent />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/event",
            element: (
              <AdminRoute>
                <AddEvent />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/admin",
            element: (
              <AdminRoute>
                <AllAdmin />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/alumni",
            element: <AlumniStudent />,
          },
          {
            path: "/dashboard",
            element: <CurrentStudent />,
          },
        ],
      },
    ],
  },
]);
