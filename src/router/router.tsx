import AuthLayout from "@/_auth/AuthLayout";
import LoginForm from "@/_auth/forms/LoginForm";
import RegisterForm from "@/_auth/forms/RegisterForm";
import StudentLayout from "@/_dashboard/StudentLayout";
import Courses from "@/_private/Courses";
import RootLayout from "@/_root/RootLayout";
import Browse from "@/_root/pages/Browse";
import Home from "@/_root/pages/Home";
import ViewCourse from "@/_root/pages/ViewCourse";
import ErrorPage from "@/error-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // public routes
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/viewcourse",
        element: <ViewCourse />,
      },
    ],
  },

  // auth routes
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
    ],
  },

  // private routes
  {
    path: "/dashboard",
    element: <StudentLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "yourcourses",
        element: <Courses />,
      },
    ],
  },
]);
