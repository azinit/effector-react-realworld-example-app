import { NavLink } from '@/shared/library/router';
import { NavItem } from '@/shared/ui';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Tabs = ({ children }: Props) => {
  return (
    <div className="col-xs-12 col-md-10 offset-md-1">
      <ul className="nav nav-pills outline-active articles-toggle">
        <NavItem>
          <NavLink caseSensitive end className="nav-link" to="">
            My Articles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink caseSensitive className="nav-link" to="favorites">
            Favorited Articles
          </NavLink>
        </NavItem>
      </ul>
      {children}
    </div>
  );
};
