import "@/styles/globals.sass";
import MainLayout from "@/layouts/landing-layout";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { CustomComponent } from "@/types/component.type";
import {
  ThirdwebProvider,
  ConnectWallet,
  // import the wallets you want
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as CustomComponent).getLayout ||
    ((page: ReactNode) => <MainLayout>{page}</MainLayout>);
  return (
    // <ThirdwebProvider
    //   supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
    //   activeChain="mumbai"
    //   clientId="53771186ace65a97193fa0e12b49a2d1"
    // >
    getLayout(<Component {...pageProps} />)
    //</ThirdwebProvider>
  );
}
