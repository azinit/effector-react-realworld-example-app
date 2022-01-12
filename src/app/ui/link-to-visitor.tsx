import * as visitor from '@/entities/visitor';
import { NavLink } from '@/shared/library/router';

type Props = {
  children: React.ReactNode;
};

export const LinkToVisitor = ({ children }: Props) => {
  const username = visitor.selectors.useUserName();

  return (
    <NavLink className="nav-link" to={`${username}`}>
      {children}
      {username}
    </NavLink>
  );
};
