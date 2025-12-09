// import {
//   RouterProvider,
//   createRouter,
//   createRootRoute,
//   createRoute,
// } from "@tanstack/react-router";

// import App from "./App.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import MintPage from "./pages/MintPage.jsx";
// import Marketplace from "./pages/Marketplace.jsx";
// import Collections from "./pages/collections.jsx";
// import ContactSection from "./pages/ContactSection.jsx";

// // ROOT LAYOUT COMPONENT
// const rootRoute = createRootRoute({
//   component: App,
// });

// // ROUTES
// const homeRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/",
//   component: HomePage,
// });

// const mintRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/mint",
//   component: MintPage,
// });

// const marketRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/marketplace",
//   component: Marketplace,
// });

// const collectionsRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/collections",
//   component: Collections,
// });

// const contactRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/contact",
//   component: ContactSection,
// });

// // ROUTE TREE
// const routeTree = rootRoute.addChildren([
//   homeRoute,
//   mintRoute,
//   marketRoute,
//   collectionsRoute,
//   contactRoute,
// ]);

// // CREATE ROUTER
// const router = createRouter({ routeTree });

// export default function Routing() {
//   return <RouterProvider router={router} />;
// }
