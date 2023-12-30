/* eslint-disable react/jsx-key */
import styles from "@/styles/pages/verification/components/verification-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Property from "./verification.component";
import CategorySelector from "../../../Investor/investments/components/category-selector.component";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VerificationContent() {
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

  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article className={styles.header}>
        <div>
          <h1>Verification</h1>
          <p>Verification Details</p>
        </div>
        <Link href="/admin/add-property">
          <button style={{ display: "hidden" }}>Add Property</button>
        </Link>
      </article>
      <article id={styles.investmentsContainer}>
        {users.map((user) => (
          <Property data={user} />
        ))}
      </article>
    </main>
  );
}
