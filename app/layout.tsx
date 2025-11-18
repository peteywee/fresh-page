import './globals.css';
import type { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fresh Schedules: The hardest part is done for you.',
  description: 'Automated staff scheduling for restaurants and venues. Save time, control labor costs, and reduce stress.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
