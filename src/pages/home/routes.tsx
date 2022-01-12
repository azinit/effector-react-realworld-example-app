import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import * as visitor from '@/entities/visitor';
import { ROUTES, PrivateRoute } from '@/shared/router';

const GlobalFeedPage = lazy(() => import('./pages/global-feed'));
const YourFeedPage = lazy(() => import('./pages/global-feed'));
const FeedByTagPage = lazy(() => import('./pages/feed-by-tag'));

export const RoutesWrapper = () => {
  // const isAuth = visitor.selectors.useAuth();

  return (
    <Routes>
      {/* <Route element={<Default />} path={ROUTES.root} /> */}
      <Route element={<GlobalFeedPage />} path={ROUTES.globalFeed} />
      <Route
        element={
          <PrivateRoute>
            <YourFeedPage />
          </PrivateRoute>
        }
        path={ROUTES.yourFeed}
      />

      <Route element={<FeedByTagPage />} path={ROUTES.feedByTag} />
    </Routes>
  );
};
