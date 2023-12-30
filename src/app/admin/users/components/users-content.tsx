/* eslint-disable react/jsx-key */
import styles from "@/styles/pages/investments/components/investments-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import User from "./users.component";
import SearchBar from "../../../../components/search-bar.component";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersContent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch users from your API route
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user/get-users");
        const data = await response.data;
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);
  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article className={styles.header}>
        <div>
          <h2>Users</h2>
        </div>
        {/* <button>Discharge</button> */}

        {/* <SearchBar category={""} /> */}
      </article>
      <article id={styles.investmentsContainer}>
        {users.map((user) => (
          <User data={user} />
        ))}
        {/* {users.map((user) => (
          <User data={user} />
        ))} */}
      </article>
    </main>
  );
}
