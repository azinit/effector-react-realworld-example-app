import { lazy, Suspense, useState, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';
import { Switch, Route } from 'react-router-dom';
import { Spinner, Page, Button } from '@/shared/ui';
import { Routes } from '../routes';

const NoMatchPage = lazy(() => import('@/pages/no-match'));

export const Root = () => {
  const [state, setState] = useState(false);
  const forceUpdate = useCallback(() => setState((x) => !x), []);

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      resetKeys={[state]}
      onReset={forceUpdate}
    >
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Routes />
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const handleClick = () => {
    resetErrorBoundary();
  };

  return (
    <Page>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button onClick={handleClick}>Try again</Button>
    </Page>
  );
}
