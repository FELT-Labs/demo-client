import { Container, Flex, Group, Text } from '@mantine/core';
import { ConnectWallet } from './ConnectWallet';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = () => {
  const router = useRouter();

  return (
    <Container size={1600}>
      <Group position="apart" my="sm">
        <div onClick={() => router.push('/')} style={{ cursor: 'pointer', display: "flex", alignItems: "center" }}>
          <Image src="/logo.svg" height={50} width={50} alt="Logo" />
          <Text size="xl">FELT Labs demo client</Text>
        </div>

        <Flex gap="md">
          <Link href="/">
            Start job
          </Link>
          <Link href="/jobs">
            Jobs
          </Link>
        </Flex>
          
        <ConnectWallet />
      </Group>
    </Container>
  );
};
