import { Outlet } from "react-router-dom";

import ProtectedRouter from "@/router/ProtectedRouter";

export default function AuthLayout() {
  return (
    <ProtectedRouter>
      <main>
        <header>header</header>
        <Outlet />
        <footer>footer</footer>
      </main>
    </ProtectedRouter>
  );
}
