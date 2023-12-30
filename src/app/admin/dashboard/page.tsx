/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/dashboard.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import { ReactNode, useEffect } from "react";
import Menu from "@/components/menu_admin.component";
import ContentHeader from "@/components/content-header_admin";
import axios from "axios";
import { useState } from "react";
import UserPreview from "@/components/user-preview.component";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import UsersDash from "./components/usersDashboard.component";

export default function Dashboard({ user }: any) {
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

              {/* 
                <div id={styles.trainingLessons}>
                  <div className={styles.lessonTaken}>
                    <div className={styles.lessonInfo}>
                      <Image
                        src="/dashboard/content/lesson-image-generic.jpg"
                        alt="Lesson Image"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h4>Jack</h4>
                        <p>jack@gmail.com</p>
                      </div>
                    </div>
                    <div className={styles.lessonCompleted}>
                      <p>Completed</p>
                    </div>
                  </div>
                  <div className={styles.lessonTaken}>
                    <div className={styles.lessonInfo}>
                      <Image
                        src="/dashboard/content/lesson-image-generic.jpg"
                        alt="Lesson Image"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h4>Esther</h4>
                        <p>esther@gmail.com</p>
                      </div>
                    </div>
                    <div className={styles.lessonProgressing}>
                      <p>Progressing</p>
                    </div>
                  </div>
                  <div className={styles.lessonTaken}>
                    <div className={styles.lessonInfo}>
                      <Image
                        src="/dashboard/content/lesson-image-generic.jpg"
                        alt="Lesson Image"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h4>Alina</h4>
                        <p>alina124@gmail.com</p>
                      </div>
                    </div>
                    <div className={styles.lessonProgressing}>
                      <p>Progressing</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </article>
            <article className={styles.topContentPiece}>
              <article id={styles.investmentsContainer}>
                <div className={styles.containerTop}>
                  <div>
                    <h3>Investments</h3>
                    <p className={styles.grayedText}>All of my investments</p>
                  </div>
                  <div>
                    <p>This Month</p>
                    <Image
                      src="/dashboard/content/icons/arrow-down-black.svg"
                      alt="Arrow Down Black"
                      height="16"
                      width="16"
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.userInvestment}>
                    <div className={styles.investmentPart}>
                      <Image
                        src="/dashboard/content/investment-willson-apartment.png"
                        alt="Investment Image"
                        width="56"
                        height="56"
                      />
                      <div>
                        <h4>Willson Apartment</h4>
                        <p>02/16/2024</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.investmentPart} ${styles.lastInvestmentPart}`}
                    >
                      <div>
                        <h4>26,89K ETH</h4>
                        <p>Eth Wallet</p>
                      </div>
                      <div>
                        <p>Success</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.userInvestment}>
                    <div className={styles.investmentPart}>
                      <Image
                        src="/dashboard/content/investment-willson-apartment.png"
                        alt="Investment Image"
                        width="56"
                        height="56"
                      />
                      <div>
                        <h4>Willson Apartment</h4>
                        <p>02/16/2024</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.investmentPart} ${styles.lastInvestmentPart}`}
                    >
                      <div>
                        <h4>26,89K ETH</h4>
                        <p>Eth Wallet</p>
                      </div>
                      <div>
                        <p>Success</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.userInvestment}>
                    <div className={styles.investmentPart}>
                      <Image
                        src="/dashboard/content/investment-willson-apartment.png"
                        alt="Investment Image"
                        width="56"
                        height="56"
                      />
                      <div>
                        <h4>Willson Apartment</h4>
                        <p>02/16/2024</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.investmentPart} ${styles.lastInvestmentPart}`}
                    >
                      <div>
                        <h4>26,89K ETH</h4>
                        <p>Eth Wallet</p>
                      </div>
                      <div>
                        <p>Success</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.investmentsButtons}>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div>
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
