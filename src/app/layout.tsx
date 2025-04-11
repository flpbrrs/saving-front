import NotificationContainer from "@/components/NotificationContainer";
import AuthProvider from "@/contexts/authProvider";
import NotificationProvider from "@/contexts/notificationProvider";
import QueryProvider from "@/contexts/queryProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Savings",
  description: "Economize dinheiro!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat} antialiased`}>
          <Theme>
            <QueryProvider>
                <AuthProvider>
                  <NotificationProvider>
                    {children}
                    <NotificationContainer />
                  </NotificationProvider>
                </AuthProvider>
            </QueryProvider>
          </Theme>
      </body>
    </html>
  );
}
