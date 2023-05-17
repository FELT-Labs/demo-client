import { Button, Text } from '@mantine/core';
import { useWeb3 } from './Web3Context';

export const ConnectWallet = () => {
  const { accountId, connect } = useWeb3();

  if (accountId) return (
    <Text>Connected with {accountId.substring(0, 8)}...</Text>
  )

  return (
    <Button onClick={connect} size="md" variant="outline">
      Connect Wallet
    </Button>
  );
};
