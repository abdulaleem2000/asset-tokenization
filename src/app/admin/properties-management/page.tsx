"use client";
import Menu from "@/components/menu_admin.component";
import styles from "@/styles/pages/investments/investments.module.sass";
import User from "@/models/user";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatPreview from "@/components/chat-preview.component";
import PropertiesContent from "./components/properties-content";

export default function Investments() {
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
    <main id={styles.investmentsView}>
      <Menu userData={userData} />
      <PropertiesContent />
     
    </main>
  );
}
