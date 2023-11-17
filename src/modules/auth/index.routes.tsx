import { RouteObject } from "react-router-dom";

export default [
  {
    path: "/auth",

    async lazy() {
      let { default: Auth } = await import("./pages/Auth.tsx");
      return { Component: Auth };
    },
    children: [
      {
        index: true,
        async lazy() {
          let { default: Login } = await import("./pages/Login.tsx");
          return { Component: Login };
        },
      },
      {
        path: "login",
        async lazy() {
          let { default: Login } = await import("./pages/Login.tsx");
          return { Component: Login };
        },
      },
      {
        path: "register",
        async lazy() {
          let { default: Register } = await import("./pages/Register.tsx");
          return { Component: Register };
        },
      },
      {
        path: "forget-password",
        async lazy() {
          let { default: ForgetPassword } = await import(
            "./pages/ForgetPassword.tsx"
          );
          return { Component: ForgetPassword };
        },
      },
    ],
  },
] as Array<RouteObject>;
