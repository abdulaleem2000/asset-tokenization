"use client";
import Menu from "@/components/menu_admin.component";
import styles from "@/styles/pages/profile/components/personal-informaion.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import Image from "next/image";
import ContentHeader from "@/components/content-header.component";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";

export default function PrivatelyConfig() {
  const [loadingData, setIsLoadingData] = useState(true);
  const [userData, setUserData] = useState({});

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
    <main id={styles.profileView}>
      <Menu userData={userData} />
      <section id={styles.personalInformationSection}>
        <ContentHeader />
        <h1>Privately Configration</h1>
        <article>
            
          <article>
            <form id={styles.personalInformationForm} name="privatelyConfigForm">
            
              <section>
                <div className={styles.formDivision}>
                  <label>Smart Contract Whitelist</label>
                  <input
                    form="privatelyConfigForm"
                    name="contract"
                    type="text"
                    placeholder="e.g john"
                    required
                  />
                </div>
                
                <div className={styles.formDivision}>
                  <label>Owners Address</label>
                  <input
                    form="privatelyConfigForm"
                    name="ownerA"
                    type="text"
                    placeholder="e.g Address"
                    required
                  />
                </div>
                
                <div className={styles.formDivision}>
                    
                  <label>Owner's Delvatakey</label>
                  <input
                    form="privatelyConfigForm"
                    name="delvatakey"
                    type="text"
                    placeholder="key"
                    required
                  />
                </div>
               
               



              
              </section>
             
              
              <button form="privatelyConfigForm" type="submit" className={styles.buttonForm}>
                Submit Now
              </button>
            </form>
          </article>
        </article>
      </section>
    </main>
  );
}

PrivatelyConfig.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
