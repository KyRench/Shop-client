import { Button, Nav } from "react-bootstrap";
import React, { useContext } from "react";
import { Context } from "../../../index";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../../../utils/consts";


const TrueAuth = () => {
  const { user, basket } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    basket.resetBasket();
  };

  return (
    <Nav className="ml-auto" style={{ color: "white" }}>
     
      {user.isAuth && user.User.role === "ADMIN" &&(
        <Button
          className={"me-3"}
          variant={"outline-light"}
          onClick={() => {
            navigate(ADMIN_ROUTE);
          }}
        >
          Админ панель
        </Button>
      )}

      <Button variant={"outline-light"} onClick={() => logOut()}>
        Выйти
      </Button>
    </Nav>
  );
};

export default TrueAuth;
