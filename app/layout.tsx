import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "台灣政要通 Taiwan Political Directory",
  description: "快速查詢台灣各縣市首長、局處長、議員與立委資訊",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={cn(inter.className, "min-h-screen bg-gray-50 text-gray-900")}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-14 items-center px-4 max-w-screen-md mx-auto">
              <div className="mr-4 hidden md:flex">
                <a className="mr-6 flex items-center space-x-2 font-bold text-lg" href="/">
                  🇹🇼 台灣政要通
                </a>
              </div>
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <span className="md:hidden font-bold">台灣政要通</span>
                {/* Search Bar Placeholder */}
                <div className="w-full flex-1 md:w-auto md:flex-none">
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 container max-w-screen-md mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-md mx-auto">
              <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built by Open Source Community. Data sources: Government Open Data, g0v.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
