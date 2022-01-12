import { useMemo } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { ROUTES } from '@/shared/library/router';
import { NavItem } from '@/shared/ui';
import { LinkToYourFeed } from './link-to-your-feed';

export const Tabs = () => {
  const [params] = useSearchParams();
  const tag = useMemo(() => params.get('tag'), [params]);

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      <LinkToYourFeed />
      <NavItem>
        <NavLink className="nav-link" to="">
          Global Feed
        </NavLink>
      </NavItem>
      {tag && (
        <NavItem>
          <NavLink className="nav-link" to={`${ROUTES.feedByTag}?tag=${tag}`}>
            <i className="ion-pound" />
            {tag}
          </NavLink>
        </NavItem>
      )}
    </ul>
  );
};
