import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { SplashScreen } from "@/components";

import authRoutes from "@/modules/auth/index.routes";

import homeRoutes from "@/modules/home/index.routes";

const router = createBrowserRouter([...authRoutes, ...homeRoutes]);

export default function Navigation() {
  return <RouterProvider router={router} fallbackElement={<SplashScreen />} />;
}
