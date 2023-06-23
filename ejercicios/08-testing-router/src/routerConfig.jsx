import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PublicRoute from './components/PublicRoute';

const routerConfig = [{
  path: "/login",
  element: <PublicRoute />,
  children: [{
    index: true,
    element: <Login />
  }]
}, {
  path: "/dashboard",
  element: <Dashboard />,
  children: [{
    index: true,
    element: <h1>Root</h1>
  }, {
    path: "reports",
    element: <h1>Reports</h1>
  }, {
    path: "profile",
    element: <Profile />
  }]
}, {
  path: "*",
  element: <h1>Not Found</h1>
}];

export default routerConfig