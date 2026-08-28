import { Box, PaletteMode } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import React from "react";
import { VortexUIProvider } from "vortex-ui";
import { Footer } from "@comp/layout/Footer";
import { Header } from "@comp/layout/Header";
import { Sidebar } from "@comp/layout/Sidebar";
import { TableOfContents } from "@comp/layout/TableOfContents";
import "./globals.css";

const inter = Inter({
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
    <html lang="en" className={inter.className}>
      <body>
        <AppRouterCacheProvider options={{ key: "vortexui", prepend: true }}>
          <VortexUIProvider disableCustomCache initialMode={themeMode}>
            <Box display="flex" flexDirection="column" minHeight="100vh">
              <Header />
              <Box display="flex" flexGrow={1}>
                <Sidebar />
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    p: { xs: 3, md: 5 },
                    maxWidth: "1000px",
                    width: "100%",
                    margin: "0 auto",
                    minHeight: "calc(100vh - 64px)",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>{children}</Box>
                  <Footer />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    width: 240,
                    flexShrink: 0,
                    position: "sticky",
                    top: 64,
                    height: "calc(100vh - 64px)",
                    overflowY: "auto",
                    p: 4,
                  }}
                >
                  <TableOfContents />
                </Box>
              </Box>
            </Box>
          </VortexUIProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
