import { NavLink, ROUTES } from '@/shared/library/router';

import { NavItem } from '@/shared/ui';

export const LogoutLinks = () => {
  return (
    <>
      <NavItem>
        <NavLink className="nav-link" to={ROUTES.root}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to={ROUTES.login}>
          Sign In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to={ROUTES.registration}>
          Sign Up
        </NavLink>
      </NavItem>
    </>
  );
};
