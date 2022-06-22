import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const {user} = useContext(Context)
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map((route) => (
          <Route path={route.path}   element={route.element} key={route.path}/>
        ))}
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}
    </Routes>
  );
};

export default AppRouter;
