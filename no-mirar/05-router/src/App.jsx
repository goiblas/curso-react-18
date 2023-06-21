import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserProvider from './components/UserProvider';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/Profile';
import PublicRoute from './components/PublicRoute';

const router = createBrowserRouter([{
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
}]);

export default function App() {
  return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
  )
}
