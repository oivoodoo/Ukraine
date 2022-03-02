import Script from 'next/script';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {children}

      <Script
        src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GXDGE86VP0');
        `}
      </Script>
    </>
  );
}
