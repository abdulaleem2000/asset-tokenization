"use client";
import styles from "@/styles/pages/create-token/create-token.module.sass";
import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "@/components/menu_admin.component";
import ChatPreview from "@/components/chat-preview.component";
import CreateTokenContent from "./components/create-token-content";

export default function CreateToken() {
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
    <main id={styles.createView}>
      <Menu userData={userData} />
      <CreateTokenContent />
    </main>
  );
}
