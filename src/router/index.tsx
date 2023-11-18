import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, RootLayout, NotFountLayout } from "@/layouts";

import authRoutes from "@/modules/auth/index.routes";

import homeRoutes from "@/modules/home/index.routes";

export const router = createBrowserRouter([
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
