import { Outlet } from "react-router-dom";

import ProtectedRouter from "@/router/ProtectedRouter";
import { ToggleTheme } from "@/components";

export default function RootLayout() {
  return (
    <ProtectedRouter>
      <main>
        <header>
          root header layout
          <ToggleTheme />
        </header>
        <Outlet />
        <footer>root footer layout</footer>
      </main>
    </ProtectedRouter>
  );
}
