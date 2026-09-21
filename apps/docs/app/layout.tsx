import { Box, PaletteMode } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { cookies } from "next/headers";
import React from "react";
import { VortexUIProvider } from "vortex-ui";
import { AppShell } from "@comp/layout/AppShell";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VortexUI - Huge IT's Component System",
  description:
    "Enterprise React component library built on top of Material UI.",
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeMode =
    (cookieStore.get("vortex-ui-theme-mode")?.value as PaletteMode) || "light";

  return (
    <html lang="en" className={rubik.className}>
      <body>
        <AppRouterCacheProvider options={{ key: "vortexui", prepend: true }}>
          <VortexUIProvider disableCustomCache initialMode={themeMode}>
            <AppShell>{children}</AppShell>
          </VortexUIProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
