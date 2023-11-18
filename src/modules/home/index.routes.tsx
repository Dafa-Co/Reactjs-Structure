import { RouteObject } from "react-router-dom";

export default [
  {
    index: true,
    async lazy() {
      let { default: Home } = await import("./pages/Home.tsx");
      return { element: <Home /> };
    },
  },
] as Array<RouteObject>;
