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
  SuccessVerification,
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
        path: "/payments/success",
        element: <Success />,
      },
      {
        path: "/payments/cancel",
        element: <Cancel />,
      },
      {
        path: "/verified",
        element: <SuccessVerification />,
      },
      {
        path: "/eventdescription/:id",
        element: <CardDescription />,
      },
      {
        path: "/myfavorites",
        element: (
          <ProtectedRoute>
            <MyFavorites />
          </ProtectedRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <ProtectedRoute>
            <ListTicketHistory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/userinfo",
        element: (
          <ProtectedRoute>
            <UserInfo />
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
]);
