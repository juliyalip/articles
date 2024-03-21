import { Outlet, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { routers } from '../../data/router/router';
import Container from '../Container/Container';

export default function Layout() {
  return (
    <>
      <Navigation items={routers} />
      <Container size="medium">
        <Outlet />
      </Container>
    </>
  );
}
 