"use client";
import styles from "@/styles/pages/messages/messages.module.sass";
import Menu from "@/components/menu.component";
import { useState, useEffect } from "react";
import axios from "axios";
import ChatContacts from "./components/contacts.components";
import Chat from "./components/chat.component";

export default function Messages() {
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
    <main id={styles.messageView}>
      <Menu userData={userData} />
      <ChatContacts />
      <Chat />
    </main>
  );
}
