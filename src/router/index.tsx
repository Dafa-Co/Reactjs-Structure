import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AuthLayout, RootLayout, NotFountLayout } from "@/layouts";

import { SplashScreen } from "@/components";

import authRoutes from "@/modules/auth/index.routes";

import homeRoutes from "@/modules/home/index.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFountLayout />,
    children: homeRoutes,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFountLayout />,
    children: authRoutes,
  },
]);

export default function Navigation() {
  return <RouterProvider router={router} fallbackElement={<SplashScreen />} />;
}
