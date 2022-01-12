import { APP_NAME } from '@/shared/config';
import { Header } from './header';
import { Logo } from './logo';
import { Navigation } from './navigation';

export const Layout = () => {
  return (
    <Header>
      <Logo title={APP_NAME} />
      <ul className="nav navbar-nav pull-xs-right">
        <Navigation />
      </ul>
    </Header>
  );
};
