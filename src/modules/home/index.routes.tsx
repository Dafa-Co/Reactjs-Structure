import { RouteObject } from "react-router-dom";

export default [
  {
    path: "/",
    async lazy() {
      let { default: Home } = await import("./pages/Home.tsx");
      return { Component: Home };
    },
  },
] as Array<RouteObject>;
