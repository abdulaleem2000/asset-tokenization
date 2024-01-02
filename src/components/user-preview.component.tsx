import Styles from "@/styles/components/user-preview.module.sass";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function UserPreview() {
  const [userCount, setUserCount] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user/get-user-count");
        const data = await response.data;
        setUserCount(data.users);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  console.log(userCount);

  return (
    <main id={Styles.userSection}>
      <div className={Styles.topSection}>
        <Image
          src="/dashboard/menu/icons/user-icon-black.svg"
          alt="Investment Image"
          width="35"
          height="35"
        />
        <h2>User</h2>
        <Image
          src="/dashboard/menu/icons/options-icon.svg"
          alt="Options Icon"
          width="35"
          height="35"
        />
      </div>

      <div id={Styles.mainSection}>
        <div className={Styles.main}>
          <h4>Total Users</h4>
          <h1>{userCount}</h1>
          <p>Users</p>
        </div>

        {/* <div className={Styles.main}>
          <h4>Total Users</h4>
          <h1>30</h1>

          <p>Unverified Users</p>
        </div> */}
      </div>
    </main>
  );
}

function userState(arg0: number): [any, any] {
  throw new Error("Function not implemented.");
}
