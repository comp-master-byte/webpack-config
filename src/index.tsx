import {createRoot} from "react-dom/client"
import App from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "./pages/About/About.lazy";
import { LazyShop } from "./pages/Shop/Shop.lazy";
import { Suspense } from "react";

const root = document.getElementById('root');

if(!root) {
    throw new Error('Root not found!')
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'...loading'}><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'...loading'}><LazyShop /></Suspense>
            }
        ]
    }
]);

const container = createRoot(root);
container.render(<RouterProvider router={router} />)