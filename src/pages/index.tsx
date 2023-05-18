import { Button, Stack, TextInput } from '@mantine/core'
import { useCallback, useState } from 'react'
import { useWeb3 } from '@/components/Web3Context'
import { useRouter } from 'next/router';
import { AlgorithmConfig, StartTraining } from '@feltlabs/react';
import Head from 'next/head';

const alg: AlgorithmConfig = {
  id: "demo-test",
  name: "Test algorithm for demo client",
  assets: {
      training: "",
      aggregation: "did:op:...",
      emptyDataset: "did:op:...",
  },
  hasParameters: false,
};

export default function Home() {
  const { web3 } = useWeb3();
  const router = useRouter();

  const [dataset1Did, setDataset1Did] = useState('did:op:3632e8584837f2eac04d85466c0cebd8b8cb2673b472a82a310175da9730042a')
  const [dataset2Did, setDataset2Did] = useState('did:op:cad4a81c9a8e1c1071ccf3e9dea6f8f42d58e100fa3ddf2950c8f0da9e0dda46')
  const [algorithmDid, setAlgorithmDid] = useState('did:op:526477b366e69610cf1b9c77c778bbc75d4b448892ab681dea972a0f3db99669')
  const [startTraining, setStartTraining] = useState(false)

  const onClick = useCallback(() => {
    setStartTraining(true)
  }, [setStartTraining])
  
  return (
    <>
      <Head>
        <title>Demo Client | FELT Labs</title>
        <meta name="description" content="FELT Labs demo client to demonstrate usage of npm package" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Stack align='center'>
        <TextInput
          w={600}
          value={dataset1Did}
          label="Dataset DID"
          withAsterisk
          onChange={(event) => setDataset1Did(event.currentTarget.value)}
        />

        <TextInput
          w={600}
          value={dataset2Did}
          label="Dataset DID"
          withAsterisk
          onChange={(event) => setDataset2Did(event.currentTarget.value)}
        />

        <TextInput
          w={600}
          value={algorithmDid}
          label="Algorithm DID"
          withAsterisk
          onChange={(event) => setAlgorithmDid(event.currentTarget.value)}
        />

        <Button onClick={onClick}>Submit</Button>
      </Stack>

      {startTraining && (
        <StartTraining
          name="test demo client"
          datasets={[dataset1Did, dataset2Did]}
          algorithm={{...alg, assets: { ...alg.assets, training: algorithmDid}}}
          algoCustomData={{}}
          web3={web3}
          onClose={() => setStartTraining(false)}
          onDone={() => router.push('/jobs')}
          isSoloTraining={false}
          selectedChainId={80001}
        />
      )}
    </>
  )
}
