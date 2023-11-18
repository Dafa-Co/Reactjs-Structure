import { ReactNode, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "react-redux";

import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import store from "@/store";

import { SplashScreen } from "@/components";

import { router } from "@/router";

export default function Providers() {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <RouterProvider />
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

function RouterProvider() {
  return (
    <ReactRouterProvider router={router} fallbackElement={<SplashScreen />} />
  );
}
