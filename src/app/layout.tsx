import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ConvexClientProvider from "@/providers/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatPulse 2.0",
  description: "The Talk of the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <ConvexClientProvider>
        {children}
        </ConvexClientProvider>
</ThemeProvider>

      </body>
    </html>
  );
}
