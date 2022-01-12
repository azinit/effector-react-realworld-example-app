import { useEffect, lazy } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import NoMatch from '@/pages/no-match';
import { ROUTES } from '@/shared/router';
import { Container, Row } from '@/shared/ui';
import * as model from './model';
import { ProfileInfo } from './ui/profile-info';
import { Tabs } from './ui/tabs';

const MyArticlesPage = lazy(() => import('./pages/my-articles'));
const FavoritedArticlesPage = lazy(() => import('./pages/favorited-articles'));

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    if (username) {
      model.getProfileFx(username);
    }
  }, [username]);

  return (
    <div className="profile-page">
      <ProfileInfo />
      <Container>
        <Row>
          <Tabs>
            <Routes>
              <Route path={ROUTES.profile.root}>
                <MyArticlesPage />
              </Route>
              <Route path={ROUTES.profile.favorites}>
                <FavoritedArticlesPage />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Routes>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
