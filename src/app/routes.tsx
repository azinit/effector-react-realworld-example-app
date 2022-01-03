import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ROUTES, PrivateRoute } from '@/shared/router';

const LoginPage = lazy(() => import('@/pages/login'));
const RegistrationPage = lazy(() => import('@/pages/registration'));
const HomePage = lazy(() => import('@/pages/home'));
const ArticlePage = lazy(() => import('@/pages/article'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const EditorPage = lazy(() => import('@/pages/editor'));
const SettingsPage = lazy(() => import('@/pages/settings'));
// const NoMatchPage = lazy(() => import('@/pages/no-match'));

type RouteType = {
  id: string;
  path: string | string[];
  component: React.ComponentType;
  exact: boolean;
  isPrivate: boolean;
};

export const routes: RouteType[] = [
  {
    id: nanoid(),
    path: ROUTES.login,
    component: LoginPage,
    exact: false,
    isPrivate: false,
  },
  {
    id: nanoid(),
    path: ROUTES.registration,
    component: RegistrationPage,
    exact: false,
    isPrivate: false,
  },
  {
    id: nanoid(),
    path: [ROUTES.root, ROUTES.globalFeed, ROUTES.yourFeed, ROUTES.feedByTag],
    component: HomePage,
    exact: true,
    isPrivate: false,
  },
  {
    id: nanoid(),
    path: ROUTES.currentArticle,
    component: ArticlePage,
    exact: false,
    isPrivate: false,
  },
  {
    id: nanoid(),
    path: ROUTES.profile.root,
    component: ProfilePage,
    exact: false,
    isPrivate: false,
  },
  {
    id: nanoid(),
    path: ROUTES.editor.root,
    component: EditorPage,
    exact: false,
    isPrivate: true,
  },
  {
    id: nanoid(),
    path: ROUTES.settings,
    component: SettingsPage,
    exact: false,
    isPrivate: true,
  },
];

export const Routes = () => {
  return (
    <>
      {routes.map((route) => {
        if (route.isPrivate) {
          return (
            <PrivateRoute exact={route.exact} key={route.id} path={route.path}>
              <route.component />
            </PrivateRoute>
          );
        }

        return (
          <Route exact={route.exact} key={route.id} path={route.path}>
            <route.component />
          </Route>
        );
      })}
    </>
  );
};
