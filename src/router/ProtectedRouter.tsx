import { useAppSelector } from "@/hooks";

import { ReactNode } from "react";

import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

export default function ProtectedRouter({ children }: Props) {
  const { pathname } = useLocation();

  const { user } = useAppSelector((state) => state.global);

  const isAuthenticated = !!user;

  const inAuthPage = pathname.includes("/auth");

  console.log(isAuthenticated);

  if (!isAuthenticated && !inAuthPage) {
    return <Navigate to="/auth" replace />;
  }

  if (isAuthenticated && inAuthPage) {
    return <Navigate to="/" replace />;
  }

  if (!isAuthenticated && inAuthPage) {
    return children;
  }

  return children;
}
