import { Header } from '@/components/Header';
import { Web3Provider } from '@/components/Web3Context';
import { initializeApp } from '@feltlabs/react';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app'

// This API key is for demo purposes only. It works only locally
initializeApp({ apiKey: '381715ae-e5fa-4ecf-8e65-1f2f8d119a1d' });

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

