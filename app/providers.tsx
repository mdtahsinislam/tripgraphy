// app/providers.tsx    ← or app/SessionProvider.tsx  (name doesn't matter)
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}