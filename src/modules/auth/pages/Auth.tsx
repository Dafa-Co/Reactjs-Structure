import ProtectedRouter from "@/router/ProtectedRouter";
import { Outlet } from "react-router-dom";

type Props = {};

export default function Auth({}: Props) {
  return (
    <ProtectedRouter>
      <Outlet />
    </ProtectedRouter>
  );
}
