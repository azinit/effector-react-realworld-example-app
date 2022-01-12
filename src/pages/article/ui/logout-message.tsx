import * as visitor from '@/entities/visitor';
import { Link, ROUTES } from '@/shared/library/router';

export const LogoutMessage = () => {
  const isAuth = visitor.selectors.useAuth();

  return isAuth ? null : (
    <p>
      <Link to={ROUTES.login}>Sign in</Link>
      &nbsp;or&nbsp;
      <Link to={ROUTES.registration}>sign up</Link>
      &nbsp;to add comments on this article.
    </p>
  );
};
