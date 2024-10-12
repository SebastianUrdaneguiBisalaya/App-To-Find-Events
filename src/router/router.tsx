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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        element: <ListTicketHistory />,
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
    element: <UserInfo />,
  },
  {
    path: "/eventdescription/:id",
    element: <CardDescription />,
  },
]);
