/* eslint-disable react/jsx-no-undef */
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/dashboard.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";
import Menu from "@/components/menu.component";
import ContentHeader from "@/components/content-header.component";
import axios from "axios";
import { useState } from "react";
import ChatPreview from "@/components/chat-preview.component";
import {
  ConnectWallet,
  lightTheme,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { tokenContract } from "@/types/constants/contract-address";
import InvestDash from "./components/investmentsDashBoard.component";

interface data {
  email?: string;
}

export default function Dashboard({ user }: any) {
  const contractAddress = tokenContract;

  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useContractRead(
    contract,
    "getInvestments"
  );

  const [userData, setUserData] = useState<data>({});

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
        <ContentHeader />

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
              </div>
              <div id={styles.trainingContainer}>
                <div id={styles.trainingTop}>
                  <div>
                    <h3>Training</h3>
                    <p>All lessons you have taken</p>
                  </div>
                  <Image
                    src="/dashboard/content/icons/arrow-right-main.svg"
                    alt="Arrow Pointing to Right"
                    height="15"
                    width="12"
                  />
                </div>
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
                        <h4>How to Invest</h4>
                        <p>24 Lessons</p>
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
                        <h4>How to Invest</h4>
                        <p>24 Lessons</p>
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
                        <h4>How to Invest</h4>
                        <p>24 Lessons</p>
                      </div>
                    </div>
                    <div className={styles.lessonProgressing}>
                      <p>Progressing</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className={styles.topContentPiece}>
              <article id={styles.investmentsContainer}>
                <Link href="/Investor/investments-made">
                  <div className={styles.containerTop}>
                    <div>
                      <h3>Investments</h3>
                      <p className={styles.grayedText}>All my investments</p>
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
                  }) =>
                    // eslint-disable-next-line react/jsx-key
                    dataMap.userEmail == userData.email ? (
                      // eslint-disable-next-line react/jsx-key
                      <InvestDash data={dataMap}></InvestDash>
                    ) : (
                      // eslint-disable-next-line react/jsx-key
                      <p></p>
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
          {/* <section id={styles.bottomContentBody}>
            <article id={styles.transactionStadisticsContainer}>
              <div className={styles.containerTop}>
                <div>
                  <h3>Investment Stadistics</h3>
                  <p className={styles.grayedText}>
                    Transactions of this month
                  </p>
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
              <div id={styles.tradesFiltersContainer}>
                <div className={styles.filterPart}>
                  <div>
                    <Image
                      src="/dashboard/content/icons/bitcoin-icon.svg"
                      alt="Bitcoin Icon"
                      width="18"
                      height="18"
                    />
                    <p>Bitcoin</p>
                  </div>
                  <div>
                    <Image
                      src="/dashboard/content/icons/ethereum-icon.svg"
                      alt="Ethereum Icon"
                      width="18"
                      height="18"
                    />
                    <p>Ethereum</p>
                  </div>
                  <div>
                    <Image
                      src="/dashboard/content/icons/link-icon.svg"
                      alt="Link Icon"
                      width="18"
                      height="18"
                    />
                    <p>Link</p>
                  </div>
                  <div>
                    <p>More</p>
                    <Image
                      src="/dashboard/content/icons/arrow-down-black.svg"
                      alt="Arrow Down Icon"
                      height="14"
                      width="14"
                    />
                  </div>
                </div>
                <div className={styles.filterPart}>
                  <div className={styles.tradesInvestmentOption}>All</div>
                  <div className={styles.tradesInvestmentOption}>Apartment</div>
                  <div className={styles.tradesInvestmentOption}>Art</div>
                  <div className={styles.tradesInvestmentOption}>
                    Venture Capital
                  </div>
                </div>
              </div>
              <hr />
              <div></div>
            </article>
          </section> */}
        </article>
      </section>
      {/* <ChatPreview /> */}
      <Link href="/Investor/qna">
        <div className={styles.stickyChatbotButton}>
          Frequently Asked Questions
          <Image
            src="/messages/icons/message-square.svg"
            alt="Ethereum Icon"
            width="18"
            height="18"
            className={styles.iconDesign}
          />
        </div>
      </Link>
    </main>
  );
}

Dashboard.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
