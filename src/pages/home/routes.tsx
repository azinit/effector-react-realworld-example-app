import { lazy, Suspense } from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import NoMatchPage from '@/pages/no-match';
import { ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner } from '@/shared/ui';

const GlobalFeed = lazy(() => import('./pages/global-feed'));
const YourFeed = lazy(() => import('./pages/global-feed'));
const FeedByTag = lazy(() => import('./pages/feed-by-tag'));

export const Routes = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/home">
          <DefaultHomePage />
        </Route>
        <Route path={`${path}${ROUTES.GLOBAL_FEED}`}>
          <GlobalFeed />
        </Route>
        <PrivateRoute path={`${path}${ROUTES.YOUR_FEED}`}>
          <YourFeed />
        </PrivateRoute>
        <Route path={`${path}${ROUTES.FEED_BY_TAG}`}>
          <FeedByTag />
        </Route>
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

function DefaultHomePage() {
  const { path } = useRouteMatch<{ path: string }>();
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <Redirect to={`${path}${ROUTES.YOUR_FEED}`} />
  ) : (
    <Redirect to={`${path}${ROUTES.GLOBAL_FEED}`} />
  );
}
