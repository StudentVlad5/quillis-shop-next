'use client';

import { PropsWithChildren } from 'react';
import { GlobalStyle } from '@/app/_components/baseStyles/GlobalStyle';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}