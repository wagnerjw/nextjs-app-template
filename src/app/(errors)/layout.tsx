import { jbmono } from '@/app/fonts/fonts';
import type { Metadata } from 'next';
import '../(root)/globals.css';

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
