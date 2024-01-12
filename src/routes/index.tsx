import React, { FunctionComponent, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { RoutePath } from "./Route";
import { CircularProgress } from "@mui/material";

const CustomSuspense = ({ children }: any) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue">
      <CircularProgress sx={{ color: "white" }} size={80} />
    </div>
    }
  >
    {children}
  </Suspense>
);

const CustomRoutes: FunctionComponent = () => {
  const token = useAppSelector((state) => state.authInfo.token);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!!token) {
      const paths = RoutePath.auth.map((ele) => ele.path);
      if (paths.includes(location.pathname)) {
        navigate("/");
      }
    } else {
      const paths = RoutePath.private.map((ele) => ele.path);
      if (paths.includes(location.pathname)) {
        navigate("/auth/login");
      }
    }
  }, [location.pathname]);

  if (!!token) {
    return (
      <Routes>
        {RoutePath.private.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<CustomSuspense>{item.element}</CustomSuspense>}
          />
        ))}
      </Routes>
    );
  } else {
    return (
      <Routes>
        {RoutePath.auth.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<CustomSuspense>{item.element}</CustomSuspense>}
          />
        ))}
      </Routes>
    );
  }
};

export default CustomRoutes;
