import { Page, Row } from '@/shared/ui';
import { LogoutBanner } from './logout-banner';
import { Sidebar } from './sidebar';
import { Tabs } from './tabs';

export const Layout = () => {
  return (
    <div className="home-page">
      <LogoutBanner />
      <Page>
        <Row>
          <main className="col-md-9">
            <Tabs />
          </main>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </Row>
      </Page>
    </div>
  );
};
