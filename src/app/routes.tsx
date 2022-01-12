import { lazy, Suspense, useState, useCallback } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route, ROUTES } from '@/shared/library/router';
import { Spinner, Page, Button } from '@/shared/ui';

const LoginPage = lazy(() => import('@/pages/login'));
const RegistrationPage = lazy(() => import('@/pages/registration'));
const EditorPage = lazy(() => import('@/pages/editor'));
const SettingsPage = lazy(() => import('@/pages/settings'));

export const RoutesWithErrorBoundary = () => {
  const [state, setState] = useState(false);
  const forceUpdate = useCallback(() => setState((x) => !x), []);

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      resetKeys={[state]}
      onReset={forceUpdate}
    >
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<LoginPage />} path={ROUTES.login} />
          <Route element={<RegistrationPage />} path={ROUTES.registration} />
          <Route element={<EditorPage />} path={ROUTES.editor.root} />
          <Route element={<SettingsPage />} path={ROUTES.settings} />
        </Routes>
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
