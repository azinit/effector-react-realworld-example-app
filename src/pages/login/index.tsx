import { Link, Navigate } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/library/router';
import { Page, Row } from '@/shared/ui';
import { LoginForm, Error } from './ui';

const LoginPage = () => {
  const isAuth = visitor.selectors.useAuth();

  return isAuth ? (
    <Navigate replace to={ROUTES.yourFeed} />
  ) : (
    <Page>
      <Row>
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>

          <p className="text-xs-center">
            <Link to={ROUTES.registration}>Need an account?</Link>
          </p>

          <Error />
          <LoginForm />
        </div>
      </Row>
    </Page>
  );
};

export default LoginPage;
