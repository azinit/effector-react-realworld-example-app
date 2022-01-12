import * as visitor from '@/entities/visitor';
import { Link, Navigate, ROUTES } from '@/shared/library/router';
import { Page, Row } from '@/shared/ui';
import { RegistrationForm, Error } from './ui';

const RegistrationPage = () => {
  const isAuth = visitor.selectors.useAuth();

  return isAuth ? (
    <Navigate replace to={ROUTES.yourFeed} />
  ) : (
    <Page>
      <Row>
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign Up</h1>

          <p className="text-xs-center">
            <Link to={ROUTES.login}>Have an account?</Link>
          </p>
          <Error />
          <RegistrationForm />
        </div>
      </Row>
    </Page>
  );
};

export default RegistrationPage;
