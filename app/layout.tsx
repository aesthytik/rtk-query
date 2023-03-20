/* eslint-disable no-undef */
import './globals.css';
import ApiProvider from '@/utils/ApiProvider';
import { AnalyticsWrapper } from './components/analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Learn</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn" />
      </head>
      <body>
        <div className="h-screen">
          <ApiProvider>{children}</ApiProvider>
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  );
}
