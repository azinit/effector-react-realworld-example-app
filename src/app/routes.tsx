import { lazy, Suspense, useState, useCallback } from 'react';

import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';
// import type { RouteObject } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '@/shared/router';
import { Spinner, Page, Button } from '@/shared/ui';

const LoginPage = lazy(() => import('@/pages/login'));
const RegistrationPage = lazy(() => import('@/pages/registration'));
const HomePage = lazy(() => import('@/pages/home'));
const GlobalFeedPage = lazy(() => import('@/pages/home/pages/global-feed'));
const EditorPage = lazy(() => import('@/pages/editor'));
const SettingsPage = lazy(() => import('@/pages/settings'));
// const ProfilePage = lazy(() => import('@/pages/profile'));
// const ArticlePage = lazy(() => import('@/pages/article'));
const NoMatchPage = lazy(() => import('@/pages/no-match'));

// const routes: RouteObject[] = [
//   {
//     path: ROUTES.login,
//     element: <LoginPage />,
//   },
//   {
//     path: ROUTES.login,
//     element: <RegistrationPage />,
//   },
//   {
//     path: ROUTES.root,
//     element: <HomePage />,
//   },
//   {
//     path: '*',
//     element: <NoMatchPage />,
//   },
// ];

export const RoutesWithErrorBoundary = () => {
  const [state, setState] = useState(false);
  const forceUpdate = useCallback(() => setState((x) => !x), []);

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      resetKeys={[state]}
      onReset={forceUpdate}
    >
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<LoginPage />} path={ROUTES.login} />
          <Route element={<RegistrationPage />} path={ROUTES.registration} />
          <Route element={<HomePage />} path={ROUTES.root}>
            <Route element={<GlobalFeedPage />} path={ROUTES.globalFeed} />
            {/* <Route
              element={
                <PrivateRoute>
                  <YourFeedPage />
                </PrivateRoute>
              }
              path={ROUTES.yourFeed}
            />

            <Route element={<FeedByTagPage />} path={ROUTES.feedByTag} /> */}
          </Route>

          <Route element={<EditorPage />} path={ROUTES.editor.root} />
          <Route element={<SettingsPage />} path={ROUTES.settings} />
          {/* <Route element={<ProfilePage />} path={ROUTES.profile.root} /> */}
          <Route element={<NoMatchPage />} path="*" />
        </Routes>
      </Suspense>

      {/* <Route
          exact
          path={[
            ROUTES.root,
            ROUTES.globalFeed,
            ROUTES.yourFeed,
            ROUTES.feedByTag,
          ]}
        >
          <HomePage />
        </Route>
        <Route path={ROUTES.profile.root}>
          <ProfilePage />
        </Route>
        <Route path={ROUTES.currentArticle}>
          <ArticlePage />
        </Route>
        <PrivateRoute path={[ROUTES.editor.root, ROUTES.editor.slug]}>
          <EditorPage />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.settings}>
          <SettingsPage />
        </PrivateRoute>
        <Route path="*">
          <NoMatchPage />
        </Route> */}
    </ErrorBoundary>
  );
};

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const handleClick = () => {
    resetErrorBoundary();
  };

  return (
    <Page>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button onClick={handleClick}>Try again</Button>
    </Page>
  );
}
