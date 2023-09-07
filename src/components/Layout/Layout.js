import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Header, Section } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
const Layout = () => {
  return (
    <>
      <Section>
        <Header>
          <Navigation />
          <hr />
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};
export default Layout;
