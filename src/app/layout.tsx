import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/react-query/provider";
import { Toaster } from "react-hot-toast";
import DirectionProvider from "@/providers/DirectionProvider";

export const metadata: Metadata = {
  title: "userManagement",
  description: "faraz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DirectionProvider />
        <ReactQueryProvider>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
