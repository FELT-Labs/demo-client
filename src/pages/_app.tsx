import { Header } from '@/components/Header';
import { Web3Provider } from '@/components/Web3Context';
import { initializeApp } from '@feltlabs/react';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

// This API key is for demo purposes only. It works only locally
initializeApp({ apiKey: '3b219f28-8a99-44fe-93f1-edc4498189be', development: true });

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
