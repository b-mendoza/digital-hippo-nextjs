import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '~/lib/utils';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'flex min-h-screen flex-col antialiased',
        )}
      >
        <main className="flex flex-grow flex-col">{children}</main>

        {/* <footer className="mt-auto">This is the footer</footer> */}
      </body>
    </html>
  );
}
