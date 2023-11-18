import { Outlet } from "react-router-dom";

import ProtectedRouter from "@/router/ProtectedRouter";
import { ToggleTheme } from "@/components";

export default function AuthLayout() {
  return (
    <ProtectedRouter>
      <main>
        <header>
          header
          <ToggleTheme />
        </header>
        <Outlet />
        <footer>footer</footer>
      </main>
    </ProtectedRouter>
  );
}
