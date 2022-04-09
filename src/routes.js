import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import CreateFarm from './pages/Farm/CreateFarm';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: <Dashboard /> },
      { path: 'coinfarm', element: <Dashboard /> },
      { path: 'coinpad', element: <Dashboard /> },
      { path: 'faq', element: <Dashboard /> },
      { path: 'more', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/home" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'app/coinfarm',
    element: <DashboardLayout />,
    children: [
      { path: 'farms', element: <Dashboard /> },
      { path: 'create-farm', element: <CreateFarm /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

];

export default routes;
