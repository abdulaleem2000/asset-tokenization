"use client";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/dashboard.module.sass";
import SingupLayout from "@/layouts/singup-layout";

import Menu from "@/components/menu.component";
import ContentHeader from "@/components/content-header.component";
import axios from "axios";
import {
  faqData,
  metaFaqData,
  stripeFaqData,
  //paymentFaqData,
} from "../../../models/chat/questions";
import FAQItem from "../../../components/FAQItem";
import Dashboard from "../dashboard/page";

const qna = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userData, setUserData] = useState("userData");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visiblity, setVisibility] = useState("answerHidden");
  const style: React.CSSProperties = { display: "none" };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/data/dashboard");

      return response.data;
    }

    getData().then((dataResponse) => {
      setUserData(dataResponse.user);
    });
  }, []);

  const handleClick = () => {
    console.log(`${styles}.${visiblity}`);
    setVisibility("answerShown");
    style.display = "block";
  };
  return (
    <main id={styles.dashboardView}>
      <Menu userData={userData} />
      <section id={styles.contentSection}>
        <ContentHeader />
        <div
          style={{
            width: "60vw",
            maxWidth: "100vw",
            margin: "50px auto",
            padding: "20px",
            // backgroundColor: "#f0f0f0",
            // borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1>Frequently Asked Questions About KYC</h1>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {faqData.map(({ id, question, answer }) => (
              <FAQItem key={id} id={id} question={question} answer={answer} />
            ))}
          </ul>
        </div>

        <div
          style={{
            width: "60vw",
            maxWidth: "100vw",
            margin: "50px auto",
            padding: "20px",
            // backgroundColor: "#f0f0f0",
            // borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1>Frequently Asked Questions About Metamask Connection</h1>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {metaFaqData.map(({ id, question, answer }) => (
              <FAQItem key={id} id={id} question={question} answer={answer} />
            ))}
          </ul>
        </div>

        <div
          style={{
            width: "60vw",
            maxWidth: "100vw",
            margin: "50px auto",
            padding: "20px",
            // backgroundColor: "#f0f0f0",
            // borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1>Frequently Asked Questions About Payments with Stripe </h1>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {stripeFaqData.map(({ id, question, answer }) => (
              <FAQItem key={id} id={id} question={question} answer={answer} />
            ))}
          </ul>
        </div>

        {/* <div
          style={{
            width: "60vw",
            maxWidth: "100vw",
            margin: "50px auto",
            padding: "20px",
            // backgroundColor: "#f0f0f0",
            // borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1>
            Frequently Asked Questions about my payments not showing up or my
            tokens not loading
          </h1>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {paymentFaqData.map(({ id, question, answer }) => (
              <FAQItem key={id} id={id} question={question} answer={answer} />
            ))}
          </ul>
        </div> */}
      </section>
    </main>
  );
};

Dashboard.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
export default qna;
