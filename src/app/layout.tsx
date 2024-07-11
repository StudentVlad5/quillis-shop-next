'use client'
import React, {Suspense } from 'react';
import StyledComponentRegistry from '../lib/registry';



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (    //  <Context.Provider value={value}>
    <html lang="en">
      {/* <Provideri18> */}
          <head>
            {/* <meta name="google-site-verification" content="kAy2gnAs7VekU8r9H5rfr8e6Y8I7n8qNeW2FBcd5rHE" /> */}
            
          </head>
          <body>
              <StyledComponentRegistry>
                <main>
                <div className="BaseContainer">
                    {children}
                  {/* <Providers>{children}</Providers> */}
                </div>
                </main>
                <Suspense fallback={<div>Loading...</div>}>
                {/* <ModalWindow/> */}
                </Suspense>
              </StyledComponentRegistry>
          </body>

          {/* <GoogleAnalytics gaId="G-65NQZ4HZH5" /> */}
      {/* </Provideri18> */}
        </html>
  // </Context.Provider>
  );
}
