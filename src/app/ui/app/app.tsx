import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import * as visitor from '@/entities/visitor';
import { APP_NAME } from '@/shared/config';
import { ROUTES, RouteAdapter } from '@/shared/router';

import { RoutesWithErrorBoundary } from '../../routes';
import { Header } from '../header';
import { Logo } from '../logo';
import { Navigation } from '../navigation';

import './app.css';

export const App = () => {
  const isAuth = visitor.selectors.useAuth();

  useEffect(() => {
    if (isAuth) {
      visitor.getVisitorFx();
    }
  }, [isAuth]);

  return (
    <BrowserRouter basename={ROUTES.basename}>
      <QueryParamProvider ReactRouterRoute={RouteAdapter}>
        <Header>
          <Logo title={APP_NAME} />
          <ul className="nav navbar-nav pull-xs-right">
            <Navigation />
          </ul>
        </Header>

        <RoutesWithErrorBoundary />
      </QueryParamProvider>
    </BrowserRouter>
  );
};
