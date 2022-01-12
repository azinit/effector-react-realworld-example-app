import { Navigate, useLocation } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from './config';

export type Props = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const isAuth = visitor.selectors.useAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate replace state={{ from: location }} to={ROUTES.login} />;
  }

  return children;
};
