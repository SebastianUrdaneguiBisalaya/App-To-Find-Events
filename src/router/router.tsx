import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import {
  Login,
  SignUp,
  TrendingEvents,
  ThisWeekEvents,
  UpcomingEvents,
  ListTicketHistory,
  UserInfo,
  CardDescription,
  Success,
  Cancel,
  MyFavorites,
} from "../views";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/trendingevents" />,
      },
      {
        path: "/trendingevents",
        element: <TrendingEvents />,
      },
      {
        path: "/eventsthisweek",
        element: <ThisWeekEvents />,
      },
      {
        path: "/upcomingevents",
        element: <UpcomingEvents />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/eventdescription/:id",
        element: <CardDescription />,
      },
      {
        path: "/myfavorites",
        element: <MyFavorites />,
      },
      {
        path: "/history",
        element: (
          <ProtectedRoute>
            <ListTicketHistory />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/userinfo",
    element: (
      <ProtectedRoute>
        <UserInfo />
      </ProtectedRoute>
    ),
  },
]);
