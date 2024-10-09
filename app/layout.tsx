import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import ErrorBoundary from '@/components/error-boundary';
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from '@/components/logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Tools Hub',
  description: 'Experience the power of AI with our suite of tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col">
              <header className="bg-background border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Logo className="text-primary" />
                    <h1 className="text-2xl font-bold text-primary">AI Tools Hub</h1>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MainNav />
                    <ThemeToggle />
                  </div>
                </div>
              </header>
              {children}
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}