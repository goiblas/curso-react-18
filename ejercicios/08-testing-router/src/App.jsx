import UserProvider from './components/UserProvider';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import routerConfig from './routerConfig';

const router = createBrowserRouter(routerConfig);

export default function App() {
  return (
        <HelmetProvider>
          <UserProvider>
              <RouterProvider router={router} />
          </UserProvider>
        </HelmetProvider>
  )
}
