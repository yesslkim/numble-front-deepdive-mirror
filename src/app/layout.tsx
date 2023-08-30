import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { BottomNav, Topbar } from '@/components/organisms';

import QueryProvider from '@/providers/QueryProvider';

import StyledComponentsRegistry from '@/lib/styledComponentRegistry';

import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <StyledComponentsRegistry>
            <Topbar />
            {children}
            <BottomNav />
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}