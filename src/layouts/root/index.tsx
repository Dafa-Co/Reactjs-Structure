import { Outlet } from "react-router-dom";

import ProtectedRouter from "@/router/ProtectedRouter";

export default function RootLayout() {
  return (
    <ProtectedRouter>
      <main>
        <header>root header layout</header>
        <Outlet />
        <footer>root footer layout</footer>
      </main>
    </ProtectedRouter>
  );
}
