"use client";
import Menu from "@/components/menu.component";
import styles from "@/styles/pages/investments/investments.module.sass";
import stylesC from "@/styles/components/content-header.module.sass";
import User from "@/models/user";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatPreview from "@/components/chat-preview.component";
import InvestmentsContent from "./components/investments-content";
import Image from "next/image";
import Link from "next/link";

interface data {
  kyc?: boolean;
}
export default function Investments() {
  const [loadingData, setIsLoadingData] = useState(true);
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
    <main id={styles.investmentsView}>
      <Menu userData={userData} />
      {userData.kyc ? (
        <InvestmentsContent />
      ) : (
        <main>
          <article id={styles.contentHeader}>
            <div className={stylesC.contentHeaderPart}>
              <div>
                <h2>Good Morning</h2>
              </div>
              <div className={stylesC.contentHeaderPart}>
                {/* <SearchBar category={"TOP-BAR"} /> */}
                <Image
                  src="/dashboard/content/icons/bell-icon-black.svg"
                  alt="Bell Icon"
                  width="25"
                  height="25"
                />
              </div>
            </div>
            <div id={stylesC.completeUserAlert}>
              <Image
                src="/dashboard/content/icons/alert-bell-main.png"
                alt="Alert Bell"
                height="24"
                width="24"
              />
              <p>
                Please finish your profile to make investments{" "}
                <Link href="/profile/personal-information">
                  <strong>Edit Now</strong>
                  <Image
                    src="/dashboard/content/icons/pencil-icon-main.svg"
                    alt="Bell Icon"
                    width="18"
                    height="18"
                  />
                </Link>
              </p>
            </div>
          </article>
        </main>
      )}
    </main>
  );
}
