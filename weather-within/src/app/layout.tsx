import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Weather Within · 此间天气', description: 'The sky outside. The weather within.', manifest: '/manifest.json', themeColor: '#f6f7f3' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
