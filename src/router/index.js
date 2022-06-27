import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Items } from '../pages/Items';
import { Detail } from '../pages/Detail';

export const defaultRoutes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/items', component: <Items />, exact: true },
  { path: '/item/:id', component: <Detail />, exact: true },
  { path: '/*', component: <Navigate to='/' />, exact: true },
];
