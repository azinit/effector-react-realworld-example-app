import * as visitor from '@/entities/visitor';
import { NavLink } from '@/shared/library/router';
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
