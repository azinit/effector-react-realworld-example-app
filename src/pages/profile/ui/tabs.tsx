import { NavLink } from 'react-router-dom';
import { NavItem } from '@/shared/ui';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Tabs = ({ children }: Props) => {
  return (
    <div className="col-xs-12 col-md-10 offset-md-1">
      <ul className="nav nav-pills outline-active articles-toggle">
        <NavItem>
          <NavLink className="nav-link" to={`${url}`}>
            My Articles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to={`${url}/favorites`}>
            Favorited Articles
          </NavLink>
        </NavItem>
      </ul>
      {children}
    </div>
  );
};
