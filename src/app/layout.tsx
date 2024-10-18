import type { Metadata } from 'next';
import { jbmono } from './fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextJS Template',
  description: 'A NextJS template with SupaBase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jbmono.className} antialiased`}>{children}</body>
    </html>
  );
}
