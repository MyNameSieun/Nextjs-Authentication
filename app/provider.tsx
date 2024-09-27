// provider은 client 컴포넌트인데 root layout은 클라이언트 컴포넌트가 안 되므로 root layout에 provider을 use client로 만들어 주입해야함

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

export default Provider;
