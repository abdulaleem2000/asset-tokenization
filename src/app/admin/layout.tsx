"use client";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ThirdwebProvider,
  ConnectWallet,
  // import the wallets you want
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

interface RoleResponse {
  role: any | null;
  error: AxiosError | null;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [userData, setUserData] = useState("userData");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/api/user/check-admin");

        return response.data;
      } catch (e) {
        router.push("/");
        return;
      }
    }

    getData().then((dataResponse) => {
      setUserData(dataResponse.user);
      setIsSuccess(true);
    });
  }, []);

  if (isSuccess === false) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <ThirdwebProvider
        supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
        activeChain="mumbai"
        clientId="53771186ace65a97193fa0e12b49a2d1"
      >
        {children}
      </ThirdwebProvider>
    </main>
  );
}

async function getRole(): Promise<RoleResponse> {
  try {
    const { data } = await axios.get("/api/user/check-admin");

    return {
      role: data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      role: null,
      error,
    };
  }
}
