import { RouteObject } from "react-router-dom";

export default [
  {
    index: true,
    async lazy() {
      let { default: Login } = await import("./pages/Login.tsx");
      return { element: <Login /> };
    },
  },
  {
    path: "login",
    async lazy() {
      let { default: Login } = await import("./pages/Login.tsx");
      return { element: <Login /> };
    },
  },
  {
    path: "register",
    async lazy() {
      let { default: Register } = await import("./pages/Register.tsx");
      return { element: <Register /> };
    },
  },
  {
    path: "forget-password",
    async lazy() {
      let { default: ForgetPassword } = await import(
        "./pages/ForgetPassword.tsx"
      );
      return { element: <ForgetPassword /> };
    },
  },
] as Array<RouteObject>;
