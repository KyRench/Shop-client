import React, { useContext } from "react";
import { Context } from "../../index";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import TrueAuth from "./authBar/TrueAuth";
import FalseAuth from "./authBar/FalseAuth";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          KENSX
        </NavLink>
        {user.isAuth ? <TrueAuth /> : <FalseAuth />}
      </Container>
    </Navbar>
  );
});

export default NavBar;
