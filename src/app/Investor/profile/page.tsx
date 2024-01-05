"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/profile/profile.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import { ReactNode, useEffect, useState } from "react";
import Menu from "@/components/menu.component";
import ContentHeader from "@/components/content-header.component";
import axios from "axios";

interface data {
  name?: string;
  surname?: string;
  dob?: string;
  representing_company?: boolean;
  region?: string;
  postal_code?: number;
  phone_number?: string;
  nationality?: string;
  id?: string;
  country?: string;

  company_tax_id?: string;

  company_region?: string;
  company_postal_code?: string;
  company_name?: string;

  company_country?: string;

  company_city?: string;

  company_address?: string;

  city?: string;

  address?: string;

  email?: string;
}
export default function Profile() {
  const [loadingData, setIsLoadingData] = useState(true);
  const [userData, setUserData] = useState<data>({});

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
          <Link href="/Investor/profile/personal-information">
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

          <h1>Personal Information</h1>
          <hr />
          <br />
          <div className={styles.profileSection}>
            <div>
              <h3>
                <strong>Name:</strong> {userData.name}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Last Name:</strong> {userData.surname}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Nationality:</strong> {userData.nationality}
              </h3>
            </div>
            <div>
              <h3>
                <strong>DOB:</strong> {userData.dob}
              </h3>
            </div>
          </div>

          <h1>Contact Information</h1>
          <hr />
          <br />
          <div className={styles.profileSection}>
            <div>
              <h3>
                <strong>Phone Number:</strong> {userData.phone_number}
              </h3>
            </div>
            <div>
              <h3>
                <strong>ID:</strong> {userData.id}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Email:</strong> {userData.email}
              </h3>
            </div>
          </div>
          <h2>Address Information</h2>
          <hr />
          <br />
          <div className={styles.profileSection}>
            <div>
              <h3>
                <strong>Address:</strong> {userData.address}
              </h3>
            </div>
            <div>
              <h3>
                <strong>City:</strong> {userData.city}
              </h3>
            </div>
          </div>

          <div className={styles.profileSection}>
            <div>
              <h3>
                <strong>Region:</strong> {userData.region}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Postal Code:</strong> {userData.postal_code}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Country:</strong> {userData.country}
              </h3>
            </div>
          </div>

          <h2>Company Information</h2>
          <hr />
          <br />
          <div className={styles.profileSection}>
            <div>
              <h3>
                <strong>Company Name:</strong> {userData.company_name}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Company City:</strong> {userData.company_city}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Company Country:</strong> {userData.company_country}
              </h3>
            </div>
          </div>

          <div className={styles.profileSection}>
            <div>
              <h3>
                <strong>Company Address:</strong> {userData.company_address}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Company Region:</strong> {userData.company_region}
              </h3>
            </div>
          </div>

          <div className={styles.profileSection}>
            <div>
              <h3>
                <strong>Company Postal Code:</strong>{" "}
                {userData.company_postal_code}
              </h3>
            </div>
            <div>
              <h3>
                <strong>Company Tax ID:</strong> {userData.company_tax_id}
              </h3>
            </div>
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
