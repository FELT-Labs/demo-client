import { Header } from '@/components/Header';
import { Web3Provider } from '@/components/Web3Context';
import { initializeApp } from '@feltlabs/react';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

// initialize FELT library with your api key
initializeApp({ apiKey: process.env.NEXT_PUBLIC_FELT_API_KEY || "", development: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Web3Provider>
        <AppShell header={<Header />}>
          <Container size={1600} px="xl" py="xl">
            <Component {...pageProps} />
          </Container>
        </AppShell>
      </Web3Provider>
    </MantineProvider>
  );
}
