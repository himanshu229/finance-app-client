import { lazy } from "react";

const LoginPage = lazy(() => import("../../pages/authentication/login"));
const HomePage = lazy(() => import("../../pages/landing/home"));
const SignupPage = lazy(() => import("../../pages/authentication/sign-up"));
const ForgetPassword = lazy(
  () => import("../../pages/authentication/forget-password")
);
const PageNotFound = lazy(() => import("../../pages/notfound"));

const Public = [
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const Private = [
  {
    path: "/",
    element: <HomePage />,
  },
];

const Auth = [
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/sign-up",
    element: <SignupPage />,
  },
  {
    path: "/auth/forget-password",
    element: <ForgetPassword />,
  },
];

export const RoutePath = {
  private: [...Private, ...Public],
  auth: [...Auth, ...Public],
};
