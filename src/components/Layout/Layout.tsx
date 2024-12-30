import { Outlet, Link } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';

import Container from '../Container/Container';
import style from './Layout.module.scss'

export default function Layout() {
  return (
    <div className={style.container}>
    <AppBar />
      <main>
      <Container >
        <Outlet />
      </Container>
      </main>
    
    </div>
  );
}
 