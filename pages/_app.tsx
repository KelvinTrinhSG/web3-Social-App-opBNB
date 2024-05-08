import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, rainbowWallet, smartWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "mumbai";
const customChain = {
  // Required information for connecting to the network
  chainId: 204, // Chain ID of the network
  rpc: ["https://opbnb-mainnet-rpc.bnbchain.org"], // Array of RPC URLs to use
 
  // Information for adding the network to your wallet (how it will appear for first time users) === \\
  // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
  nativeCurrency: {
    decimals: 18,
    name: "opBNB Mainnet",
    symbol: "opBNB",
  },
  shortName: "opBNB", // Display value shown in the wallet UI
  slug: "opBNB", // Display value shown in the wallet UI
  testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "opBNB", // Name of the network
  name: "opBNB Mainnet", // Name of the network
};

function MyApp({ Component, pageProps }: AppProps) {
  //Set up smart wallet config
  // const smartWalletConfig = {
  //   factoryAddress: "0xb073ab62195b46fd43ae74e86fb978f0a234d94b",
  //   gasless: true,
  // };
  
  return (
    <ThirdwebProvider
      clientId={"655b6fab497583368cc6f8ee6e1183c3"}
      activeChain={customChain}
      supportedWallets={[
        // smartWallet(embeddedWallet(), smartWalletConfig),
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        rainbowWallet(),
        trustWallet(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
