import * as visitor from '@/entities/visitor';
import { Navigate, ROUTES } from '@/shared/library/router';

export const Default = () => {
  const isAuth = visitor.selectors.useAuth();

  return isAuth ? (
    <Navigate to={ROUTES.yourFeed} />
  ) : (
    <Navigate to={ROUTES.globalFeed} />
  );
};
