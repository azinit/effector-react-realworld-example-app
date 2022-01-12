import { NavLink } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { NavItem } from '@/shared/ui';

export const LinkToYourFeed = () => {
  const isAuth = visitor.selectors.useAuth();

  return isAuth ? (
    <NavItem>
      <NavLink className="nav-link" to="/">
        Your Feed
      </NavLink>
    </NavItem>
  ) : null;
};
