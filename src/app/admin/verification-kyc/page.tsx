"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/kyc.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import { ReactNode, useEffect } from "react";
import Menu from "@/components/menu_admin.component";
import ContentHeader from "@/components/content-header_admin";
import axios from "axios";
import { useState } from "react";
import UserPreview from "@/components/user-preview.component";
import { useSearchParams } from "next/navigation";
import { log } from "console";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface userData {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  country?: string;
  id?: string;
  nationality?: string;
  id_passport?: string;
  address?: string;
}

export default function VerificationKyc({ user }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams.get("_id"));

  const data = { id: searchParams.get("_id") };
  const [userData, setUserData] = useState("userData");
  const [userVerData, setVerUserData] = useState<userData>({});
  const [docImage, setDocImage] = useState("");
  //getting data from api
  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/data/dashboard");

      return response.data;
    }

    const fetchUser = async () => {
      const response = await axios.post("/api/user/get-user-by-id", data);
      return response.data;
    };
    getData().then((dataResponse) => {
      setUserData(dataResponse.user);
    });

    fetchUser().then((dataRes) => {
      setVerUserData(dataRes.user);
    });
  }, []);
  //setting image
  useEffect(() => {
    if (typeof userVerData.id_passport === "string") {
      setDocImage(userVerData.id_passport);
    }
  }, [userVerData.id_passport]);

  const handleApproveClick = async () => {
    try {
      const response = await axios.post("/api/user/approve", data);
      if (response.status !== 200) {
        throw new Error("HTTP error! status: " + response.status);
      }
      toast.success(response.data.message);
      router.push("/admin/verification");
    } catch (error) {
      console.log(error);
    }

    console.log("click");
  };
  return (
    <main id={styles.dashboardView}>
      <Menu userData={userData} />
      <Toaster />
      <section id={styles.contentSection}>
        <div className={styles.contentHeaderS}>
          <ContentHeader />
        </div>

        <article id={styles.mainBody}>
          <div id={styles.userDetails}>
            <div className={styles.headerUserDetails}>
              <Image
                className={styles.imgStyle}
                src="/dashboard/content/girl.jpeg"
                alt="profile pic"
                height="70"
                width="70"
              />

              <div className={styles.namePlate}>
                <h1 className={styles.text}>
                  {userVerData.name}
                  <span> </span>
                  {userVerData.surname}
                </h1>

                <p>
                  <Image
                    className={styles.mailStyle}
                    src="/mail-com.svg"
                    alt="mail icon"
                    height="10"
                    width="10"
                  />
                  {userVerData.email}
                </p>
              </div>
            </div>

            <div className={styles.userDetailsMainBody}>
              <div className={styles.userDetailsText}>
                <h4>Address: </h4>
                <p>{userVerData.address}</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Country: </h4>
                <p>{userVerData.country}</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>ID Number: </h4>
                <p>{userVerData.id}</p>
              </div>

              {/* <div className={styles.userDetailsText}>
                <h4>Validation Date: </h4>
                <p>11/20/2023</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>DNI: </h4>
                <p>53408u4o</p>
              </div> */}

              <div className={styles.userDetailsText}>
                <h4>Nationality: </h4>
                <p>{userVerData.nationality}</p>
              </div>
              {/* <div className={styles.userDetailsText}>
                <h4>Registered Address:</h4>
              </div> */}
            </div>
          </div>
          <div>
            <div id={styles.tenantSelfie}>
              <div className={styles.headerUserDetails}>
                <Image
                  className={styles.mailStyle}
                  src="/dashboard/menu/icons/user-icon-black.svg"
                  alt="user icon"
                  height="30"
                  width="30"
                />
                <h3>Tenant ID </h3>
              </div>
              <div>
                {docImage ? (
                  <Image
                    src={docImage}
                    alt="user icon"
                    height="300"
                    width="400"
                  />
                ) : (
                  <p></p>
                )}
              </div>
            </div>

            {/* <div id={styles.tenantSelfie}>
              <div className={styles.headerUserDetails}>
                <Image
                  className={styles.mailStyle}
                  src="/dashboard/menu/icons/user-icon-black.svg"
                  alt="user icon"
                  height="30"
                  width="30"
                />
                <h3>Tenant Identification Selfie</h3>
              </div>
              <img></img>
            </div> */}
          </div>

          <div id={styles.tenantSelfie}>
            <div className={styles.headerUserDetails}>
              <Image
                className={styles.mailStyle}
                src="/dashboard/menu/icons/user-icon-black.svg"
                alt="user icon"
                height="30"
                width="30"
              />
              <h3>Tenant Identification Selfie</h3>
            </div>
          </div>
        </article>
        <button onClick={handleApproveClick} className={styles.approveButton}>
          Approve
        </button>
      </section>
    </main>
  );
}

VerificationKyc.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
