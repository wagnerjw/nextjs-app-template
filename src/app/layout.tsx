import type { Metadata } from 'next';
import { jbmono } from './fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextJS Template',
  description:
    'A nextjs template with shadcn components and supabase for auth & backend',
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
