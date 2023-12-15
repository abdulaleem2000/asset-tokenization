"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/kyc.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import { ReactNode, useEffect } from "react";
import Menu from "@/components/menu_admin.component";
import ContentHeader from "@/components/content-header_admin";
import axios from "axios";
import { useState } from "react";
import UserPreview from "@/components/user-preview.component";

export default function VerificationKyc({ user }: any) {
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
        <div className={styles.contentHeaderS}>
          <ContentHeader />
        </div>

        <article id={styles.mainBody}>
          <div id={styles.userDetails}>
            <div className={styles.headerUserDetails}>
              <Image
                className={styles.imgStyle}
                src="/dashboard/content/girl.jpeg"
                alt="profile pic"
                height="70"
                width="70"
              />

              <div className={styles.namePlate}>
                <h1 className={styles.text}>Esther Howard</h1>

                <p>
                  <Image
                    className={styles.mailStyle}
                    src="/mail-com.svg"
                    alt="mail icon"
                    height="10"
                    width="10"
                  />
                  esther@gmail.com
                </p>
              </div>
            </div>

            <div className={styles.userDetailsMainBody}>
              <div className={styles.userDetailsText}>
                <h4>Address: </h4>
                <p>wah g wah house gulber town, hasilpur</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Country: </h4>
                <p>9870.9 / 10000</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>DNI: </h4>
                <p>376487</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Validation Date: </h4>
                <p>11/20/2023</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>DNI: </h4>
                <p>53408u4o</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Nationality: </h4>
                <p>Palestine</p>
              </div>
              <div className={styles.userDetailsText}>
                <h4>Registered Address:</h4>
              </div>
            </div>
          </div>
          <div>
            <div id={styles.tenantSelfie}>
              <div className={styles.headerUserDetails}>
                <Image
                  className={styles.mailStyle}
                  src="/dashboard/menu/icons/user-icon-black.svg"
                  alt="user icon"
                  height="30"
                  width="30"
                />
                <h3>Tenant Identification Selfie</h3>
              </div>
            </div>

            <div id={styles.tenantSelfie}>
              <div className={styles.headerUserDetails}>
                <Image
                  className={styles.mailStyle}
                  src="/dashboard/menu/icons/user-icon-black.svg"
                  alt="user icon"
                  height="30"
                  width="30"
                />
                <h3>Tenant Identification Selfie</h3>
              </div>
            </div>
          </div>

          <div id={styles.tenantSelfie}>
            <div className={styles.headerUserDetails}>
              <Image
                className={styles.mailStyle}
                src="/dashboard/menu/icons/user-icon-black.svg"
                alt="user icon"
                height="30"
                width="30"
              />
              <h3>Tenant Identification Selfie</h3>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

VerificationKyc.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
