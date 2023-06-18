import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AuthProvider from "./components/AuthProvider";
import Todo from "./pages/Todo";
import { RouterProvider } from 'react-router-dom'
import TrackingProvider from "./components/TrackingProvider";
import { HelmetProvider } from "react-helmet-async";

// import { lazy, Suspense } from "react";
// const ProfilePage = lazy(() => import("./pages/Profile"));

const router = createBrowserRouter([{
    element: <TrackingProvider />,
    children: [{
        path: "/app",
        element: <PrivateRoute />,
        children: [{
            index: true,
            element: <Navigate to="/app/dashboard" />
        },{
            path: "/app/dashboard",
            async lazy () {
                const page = await import("./pages/Dashboard");
                return {
                    Component: page.default,
                }
            },
        }, {
            path: "/app/profile",
            element: <Profile />,
        }, {
            path: "/app/todo/:id",
            element: <Todo />,
            loader: async ({ params }) => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
                if (res.status === 404) {
                    throw new Response("Not Found", { status: 404 });
                }
                return res.json();
            },
            errorElement: <h1>Todo Error!</h1>,
        }]
    }, {
        path: "/",
        element: <PublicRoute />,
        children: [{
            path: "/login",
            element: <Login />,
        }]
    }, {
        path: "*",
        element: <h1>Not Found</h1>
    }]
}]);

const Fallback = () => {
    return (
        <div style={{ height: "100vh", background: "red"}}><h1>Loading suspense...</h1></div>
    )
}

export default function App() {
    return (
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={router} fallbackElement={<Fallback />} />
            </AuthProvider>
        </HelmetProvider>
    )
}