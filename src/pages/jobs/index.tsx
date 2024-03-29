import { DisplayJobs } from '@feltlabs/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback } from 'react';

const LaunchedJobs: NextPage = () => {
  const finalResultCallback = useCallback(async (finalResultUrl: string) => {
    fetch(finalResultUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const file = window.URL.createObjectURL(blob);
        window.location.assign(file);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Demo Client | FELT Labs</title>
        <meta name="description" content="FELT Labs demo client to demonstrate usage of npm package" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <DisplayJobs finalResultCallback={finalResultCallback} />
    </>
  );
};

export default LaunchedJobs;
