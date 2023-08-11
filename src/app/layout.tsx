import "./globals.css";
import Providers from "./providers";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Nelsmano House Search",
  description: "Nelsmano House Search",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased overflow-hidden">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex container h-[calc(100vh-theme('spacing.14'))]">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
