"use client";

import { SessionProvider } from "next-auth/react";
import NextTopLader from "nextjs-toploader";
import * as React from "react";
import { Toaster } from "react-hot-toast";
export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
      <NextTopLader />
    </>
  );
};
