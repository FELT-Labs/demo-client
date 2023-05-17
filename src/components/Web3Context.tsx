import { createContext, FC, useCallback, useContext, useState } from 'react';
import Web3 from 'web3';

declare let window: any

interface Web3ProviderValue {
  web3: Web3 | undefined;
  accountId: string | undefined;
  chainId: number | undefined
  web3Loading: boolean;
  connect: () => Promise<void>;
}

// Context
const Web3Context = createContext({} as Web3ProviderValue);

// Helper hook to access the provider values
export const useWeb3 = (): Web3ProviderValue => useContext(Web3Context);

// Provider
export const Web3Provider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3>()
  const [chainId, setChainId] = useState<number>()
  const [accountId, setAccountId] = useState<string>()
  const [web3Loading, setWeb3Loading] = useState<boolean>(true)

  // -----------------------------------
  // connect to web3
  // -----------------------------------
  const connect = useCallback(async() => {
    try {
      setWeb3Loading(true)
      console.log("[web3] Connecting Web3...")

      const { ethereum } = window

      if (!ethereum) {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")
        return
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" })
      console.log("[web3] Metamask connected with accounts", accounts)

      const web3 = new Web3(ethereum)
      setWeb3(web3)
      console.log("[web3] Web3 created.", web3)

      const chainId = await web3.eth.getChainId()
      setChainId(chainId)
      console.log("[web3] chain id", chainId)

      const accountId = (await web3.eth.getAccounts())[0]
      setAccountId(accountId)
      console.log("[web3] account id", accountId)
    } catch (error) {
      console.log("[web3] Error: ", error)
    } finally {
      setWeb3Loading(false)
    }
  }, [])

  return (
    <Web3Context.Provider
      value={{
        web3,
        accountId,
        chainId,
        web3Loading,
        connect,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}