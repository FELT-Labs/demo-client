import { initializeApp } from '@feltlabs/react';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

import { Header } from '@/components/Header';

// initialize FELT library with your api key
initializeApp({ apiKey: process.env.NEXT_PUBLIC_FELT_API_KEY || '', development: true });

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell header={<Header />}>
        <Container size={1600} px="xl" py="xl">
          <AnyComponent {...pageProps} />
        </Container>
      </AppShell>
    </MantineProvider>
  );
}
