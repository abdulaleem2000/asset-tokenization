"use client";
import { useEffect, useState } from "react";
import Menu from "../../../components/menu.component";
import axios from "axios";
import ProfitContent from "./components/investments-made-content";
import styles from "@/styles/pages/verification/verifications.module.sass";
export default function Verification() {
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
    <main id={styles.verificationsView}>
      <Menu userData={userData} />
      <ProfitContent />
    </main>
  );
}
