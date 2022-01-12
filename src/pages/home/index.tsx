import { Page, Row } from '@/shared/ui';
import { LogoutBanner } from './ui/logout-banner';
import { Sidebar } from './ui/sidebar';
import { Tabs } from './ui/tabs';

const HomePage = () => {
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

export default HomePage;
