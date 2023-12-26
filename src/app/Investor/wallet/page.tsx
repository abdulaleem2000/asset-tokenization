"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/dashboard.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import { ReactNode, useEffect } from "react";
import Menu from "@/components/menu.component";
import ContentHeader from "@/components/content-header.component";
import axios from "axios";
import { useState } from "react";
import ChatPreview from "@/components/chat-preview.component";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";

const Wallet = () => {
  const [userData, setUserData] = useState("userData");

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/data/dashboard");

      return response.data;
    }

    getData().then((dataResponse) => {
      setUserData(dataResponse.user);
    });
  }, []);
  return (
    <main id={styles.dashboardView}>
      <Menu userData={userData} />
      <section id={styles.contentSection}>
        <ContentHeader userData={userData} />
        <div id={styles.userWallet}>
          <ConnectWallet
            theme={lightTheme({
              colors: {
                accentButtonBg: "#c8ff00",
                primaryText: "#591dc9",
              },
            })}
          />
        </div>
      </section>
    </main>
  );
};

export default Wallet;
