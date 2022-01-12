import { lazy, Suspense } from 'react';
// import * as visitor from '@/entities/visitor';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '@/shared/library/router';
import { Spinner } from '@/shared/ui';
import { Layout } from '../layout';

const RegistrationPage = lazy(() => import('@/pages/registration'));
const LoginPage = lazy(() => import('@/pages/login'));

const HomePage = lazy(() => import('@/pages/home'));
const GlobalFeedPage = lazy(() => import('@/pages/home/pages/global-feed'));
// const YourFeedPage = lazy(() => import('@/pages/home/pages/your-feed'));
const FeedByTagPage = lazy(() => import('@/pages/home/pages/feed-by-tag'));

const ProfilePage = lazy(() => import('@/pages/profile'));
const MyArticlesPage = lazy(() => import('@/pages/profile/pages/my-articles'));
const FavoritedArticlesPage = lazy(
  () => import('@/pages/profile/pages/favorited-articles'),
);

const ArticlePage = lazy(() => import('@/pages/article'));
const EditorPage = lazy(() => import('@/pages/editor'));
const SettingsPage = lazy(() => import('@/pages/settings'));

const NoMatchPage = lazy(() => import('@/pages/no-match'));

export const App = () => {
  // const isAuth = visitor.selectors.useAuth();

  return (
    <BrowserRouter basename="/effector-react-realworld-example-app/">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<RegistrationPage />} path="registration" />
            <Route element={<LoginPage />} path="login" />

            <Route element={<HomePage />} path="/">
              <Route index element={<GlobalFeedPage />} />
              <Route element={<FeedByTagPage />} path="feed-by-tag" />
            </Route>
            <Route element={<ProfilePage />} path=":username">
              <Route index element={<MyArticlesPage />} />
              <Route element={<FavoritedArticlesPage />} path="favorites" />
            </Route>
            <Route element={<ArticlePage />} path="article/:slug" />
            <Route
              element={
                <PrivateRoute>
                  <EditorPage />
                </PrivateRoute>
              }
              path="editor"
            >
              <Route
                element={
                  <PrivateRoute>
                    <EditorPage />
                  </PrivateRoute>
                }
                path=":slug"
              />
            </Route>

            <Route
              element={
                <PrivateRoute>
                  <SettingsPage />
                </PrivateRoute>
              }
              path="settings"
            />
            <Route element={<NoMatchPage />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
