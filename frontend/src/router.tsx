import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import App from './App';

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <App />
      <TanStackRouterDevtools />
    </>
  ),
});

// Create index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome to the E-commerce Platform!</h3>
        <p>This is the home page of our Amazon-like e-commerce platform.</p>
      </div>
    );
  },
});

// Create about route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return (
      <div className="p-2">
        <h3>About</h3>
        <p>
          This is an Amazon-like e-commerce platform built with modern
          technologies.
        </p>
      </div>
    );
  },
});

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

// Create the router instance
export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
