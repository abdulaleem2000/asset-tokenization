"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/profile/profile.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import { ReactNode, useEffect, useState } from "react";
import Menu from "@/components/menu.component";
import ContentHeader from "@/components/content-header.component";
import axios from "axios";

export default function Profile() {
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
  console.log(userData);

  return (
    <main id={styles.profileView}>
      <Menu userData={userData} />
      <section id={styles.profileSection}>
        <ContentHeader />

        {/* <div className={styles.profileContainer}> */}
        {/* <div className="profile-picture">
  <img src="profile.jpg" alt="Profile Picture">
</div> */}
        <div className={styles.profileContainer}>
          <Link href="/profile/personal-information">
            <div id={styles.personalInformationContainer}>
              <h4>Edit Personal Information</h4>
              <Image
                src="/profile/icons/alert-icon-main.svg"
                alt="Alert Icon"
                width="24"
                height="24"
              />
            </div>
          </Link>
          <br></br>
          <div className={styles.profileSection}>
            <h2>Personal Information</h2>
            <br />
            <p>
              <strong>Name:</strong> a;li
            </p>
            <p>
              <strong>Surname:</strong> Doe
            </p>
            <p>
              <strong>Nationality:</strong> Some Nationality
            </p>
          </div>

          <div className={styles.profileSection}>
            <h2>Contact Information</h2>
            <br />
            <p>
              <strong>Phone Number:</strong> +123456789
            </p>
            <p>
              <strong>ID:</strong> ABC123
            </p>
          </div>

          <div className={styles.profileSection}>
            <h2>Address Information</h2>
            <br />
            <p>
              <strong>Address:</strong> 123 Main St, Cityville
            </p>
            <p>
              <strong>City:</strong> Cityville
            </p>
          </div>

          <div className={styles.profileSection}>
            <h2>Company Information</h2>
            <br />
            <p>
              <strong>Representing Company:</strong> XYZ Corporation
            </p>
            <p>
              <strong>Company Name:</strong> XYZ Corp
            </p>
          </div>
        </div>
        {/* <h1>Profile Details</h1>
        <article id={styles.userSummary}>
          <Image
            src="/dashboard/menu/icons/user-icon-black.svg"
            alt="User Image"
            width="69"
            height="69"
          />
          <div>
            <h3>Upload Image</h3>
            <p>Format should be jpg/png</p>
          </div>
          <Link href="/profile/personal-information">
            <div id={styles.personalInformationContainer}>
              <h4>Personal Information</h4>
              <Image
                src="/profile/icons/alert-icon-main.svg"
                alt="Alert Icon"
                width="24"
                height="24"
              />
            </div>
          </Link>
        </article>
        <article>
          <form id={styles.userInfoForm}>
            <label>Username</label>
            <input name="username" type="text"></input>
            <label>Email</label>
            <input name="userMail" type="email"></input>
            <label>Password</label>
            <input name="userPassword" type="password"></input>
            <label>Language</label>
            <input name="userLanguage" type=""></input>
          </form>
        </article> */}
      </section>
    </main>
  );
}

Profile.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
