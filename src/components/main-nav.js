import { NavLink } from "react-router-dom";
import React from "react";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { useAuth0 } from "@auth0/auth0-react";

import {
  NavItem
} from "reactstrap";

const MainNav = () => {

  const {
    isAuthenticated
  } = useAuth0();


  return (
    <div className="navbar-nav mr-auto">

      {!isAuthenticated && (
        <NavItem>
          <LoginButton />
        </NavItem>

      )}
      {isAuthenticated && (
          <h2>Payment Success</h2>
      )}

      {isAuthenticated && (
          <NavItem>
            <LogoutButton />
          </NavItem>
      )}

    </div>
  );
}
export default MainNav;
