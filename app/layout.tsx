import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "When money's in limbo.",
  description:
    'A minimal product-design case study for SadaPay transaction recovery flows.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
