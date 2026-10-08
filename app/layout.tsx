import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Nara Properties | A considered perspective on Dubai real estate',
  description: 'Explore Dubai real estate with Nara Properties. Personalised property search, residential sales and leasing, and investment guidance.',
  icons: { icon: '/brand/symbol.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
