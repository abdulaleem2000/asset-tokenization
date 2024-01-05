/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/dashboard.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import Menu from "@/components/menu_admin.component";
import ContentHeader from "@/components/content-header_admin";
import axios from "axios";
import { useState } from "react";
import UserPreview from "@/components/user-preview.component";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import UsersDash from "./components/usersDashboard.component";
import InvestDash from "./components/investmentsDashBoard.component";
import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";
import { tokenContract } from "@/types/constants/contract-address";

export default function Dashboard({ user }: any) {
  //fetching investments from smart contract
  //const contractAddress = "0x1f7CC67Ce6745E6c2cd7811e6169139979Bd37BD";
  const contractAddress = tokenContract;

  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useContractRead(
    contract,
    "getInvestments"
  );

  const [userData, setUserData] = useState("userData");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/data/dashboard");

      return response.data;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user/recent-user");
        const data = await response.data;
        setUsers(data.users);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    getData().then((dataResponse) => {
      setUserData(dataResponse.user);
    });

    fetchUsers();
  }, []);

  return (
    <main id={styles.dashboardView}>
      <Menu userData={userData} />

      <section id={styles.contentSection}>
        <article id={styles.contentHeader}>
          <div className={styles.contentHeaderPart}>
            <div>
              <h2>Good Morning</h2>
            </div>
          </div>
        </article>
        {/* <ContentHeader /> */}

        <article id={styles.contentBody}>
          <section id={styles.topContentBody}>
            <article className={styles.topContentPiece}>
              <div id={styles.userWallet}>
                <ConnectWallet
                  theme={lightTheme({
                    colors: {
                      accentButtonBg: "#c8ff00",
                      primaryText: "#591dc9",
                    },
                  })}
                />

                {/* <div className={styles.walletPiece}>
                  <div id={styles.walletCurrency}>
                    <Image
                      src="/dashboard/content/icons/eth-icon.svg"
                      alt="ETH Icon"
                      height="33"
                      width="20"
                    />
                    <div>
                      <h3>ETH Wallet</h3>
                      <p>Total Amount</p>
                    </div>
                  </div>
                  <Image
                    src="/dashboard/content/icons/add-icon-main.png"
                    alt="Add Icon"
                    height="47"
                    width="47"
                  />
                </div>
                <div className={styles.walletPiece}>
                  <div id={styles.walletBalance}>
                    <div>
                      <h2>26,134.31</h2>
                      <p>ETH</p>
                    </div>
                    <p>Total Crypto Amount</p>
                  </div>
                  <Image
                    src="/dashboard/content/icons/send-icon-main.svg"
                    alt="Send Icon"
                    height="44"
                    width="44"
                  />
                </div> */}
              </div>
              {
                //showing users for admin
              }
              <div id={styles.trainingContainer}>
                <Link href="/admin/verification">
                  <div id={styles.trainingTop}>
                    <div>
                      <h3>Users</h3>
                      <p>View Recent Users</p>
                    </div>
                    <Image
                      src="/dashboard/content/icons/arrow-right-main.svg"
                      alt="Arrow Pointing to Right"
                      height="15"
                      width="12"
                    />
                  </div>
                </Link>
              </div>
              {users.map((user) => (
                <UsersDash data={user} />
              ))}
            </article>
            <article className={styles.topContentPiece}>
              <article id={styles.investmentsContainer}>
                <Link href="/admin/investments-made">
                  <div className={styles.containerTop}>
                    <div>
                      <h3>Investments</h3>
                      <p className={styles.grayedText}>All investments</p>
                    </div>
                    <div>
                      {/* <p>This Month</p>
                    <Image
                      src="/dashboard/content/icons/arrow-down-black.svg"
                      alt="Arrow Down Black"
                      height="16"
                      width="16"
                    /> */}
                    </div>
                  </div>
                </Link>
                {data?.map(
                  (dataMap: {
                    [x: string]: ReactNode;
                    name:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                  }) => (
                    // eslint-disable-next-line react/jsx-key
                    <InvestDash data={dataMap} />
                  )
                )}

                {/* <div id={styles.investmentsButtons}>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div> */}
              </article>
            </article>
          </section>
        </article>
      </section>
      <UserPreview />
    </main>
  );
}

Dashboard.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
