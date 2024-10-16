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
  {
    path: "/eventdescription/:id",
    element: <CardDescription />,
  },
]);
