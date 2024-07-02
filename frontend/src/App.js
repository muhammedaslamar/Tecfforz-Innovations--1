import React from "react";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import Navbar2 from "./components/navbar2/navbar2";
import Signup from "./components/signup/signup";
import Addtodo from "./components/add-contact/addcontact";
import Login from "./components/login/login";
import Update from "./components/update/update";
import Dispcard from "./components/displcard/dispcard";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./screens/layout/layout";
import { RequireAuth } from "./context/authGuard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Layout />
        </RequireAuth>
      ),
      children: [
        {
          index: true,
          element: <Dispcard />,
        },
        {
          path: "addcontact",
          element: <Addtodo />,
        },
        {
          path: "update",
          element: <Update />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
