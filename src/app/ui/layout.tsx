import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { APP_NAME } from '@/shared/config';
import { Header } from './header';
import { Logo } from './logo';
import { Navigation } from './navigation';

export const Layout = () => {
  const isAuth = visitor.selectors.useAuth();

  useEffect(() => {
    if (isAuth) {
      visitor.getVisitorFx();
    }
  }, [isAuth]);

  return (
    <>
      <Header>
        <Logo title={APP_NAME} />
        <ul className="nav navbar-nav pull-xs-right">
          <Navigation />
        </ul>
      </Header>

      <Outlet />
    </>
  );
};
