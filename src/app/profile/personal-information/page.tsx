"use client";
import Menu from "@/components/menu.component";
import styles from "@/styles/pages/profile/components/personal-informaion.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import Image from "next/image";
import ContentHeader from "@/components/content-header.component";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";

export default function PersonalInformation() {
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
    <main id={styles.profileView}>
      <Menu userData={userData} />
      <section id={styles.personalInformationSection}>
        <ContentHeader />
        <article>
          <div id={styles.topForm}>
            <Image
              src="/profile/icons/registration-icon.svg"
              alt="Document Icon"
              width="24"
              height="24"
            />
            <div>
              <h3>Incomplete Registration</h3>
              <p>
                To trade on Token you must complete you legal Personal
                information and then you have to add the wallet.
              </p>
            </div>
          </div>
          <article>
            <form id={styles.personalInformationForm} name="userDataForm">
              <section>
                <div className={styles.formDivision}>
                  <label>First Name*</label>
                  <input
                    form="userDataForm"
                    name="userName"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Last Name*</label>
                  <input
                    form="userDataForm"
                    name="lastName"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Date of Birth*</label>
                  <input
                    form="userDataForm"
                    name="dateOfBirth"
                    type="date"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Nationality*</label>
                  <input
                    form="userDataForm"
                    name="userNationality"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Telephone*</label>
                  <input
                    form="userDataForm"
                    name="userTelephone"
                    type="tel"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>ID or Passport Number*</label>
                  <input
                    form="userDataForm"
                    name="userId"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Address*</label>
                  <input
                    form="userDataForm"
                    name="userAddress"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>City*</label>
                  <input
                    form="userDataForm"
                    name="userCity"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Region*</label>
                  <input
                    form="userDataForm"
                    name="userRegion"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Postal Code*</label>
                  <input
                    form="userDataForm"
                    name="userPostalCode"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Country*</label>
                  <input
                    form="userDataForm"
                    name="userCountry"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Are you representing a company?</label>
                  <div className={styles.checkboxesContainer}>
                    <div>
                      <input
                        form="userDataForm"
                        name="userRepresentingCompany"
                        type="checkbox"
                      />
                      <p>Yes</p>
                    </div>
                    <div>
                      <input
                        form="userDataForm"
                        name="userNotRepresentingCompany"
                        type="checkbox"
                      />
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Name*</label>
                  <input
                    form="userDataForm"
                    name="userCompany"
                    type="text"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Tax Identification Number*</label>
                  <input
                    form="userDataForm"
                    name="userCompanyTaxId"
                    type="number"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Address*</label>
                  <input
                    form="userDataForm"
                    name="userCompanyAddress"
                    type="text"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company City*</label>
                  <input
                    form="userDataForm"
                    name="userCompanyCity"
                    type="text"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Region*</label>
                  <input
                    form="userDataForm"
                    name="userCompanyRegion"
                    type="text"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Postal Code*</label>
                  <input
                    form="userDataForm"
                    name="userCompanyPostalCode"
                    type="number"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Country*</label>
                  <input
                    form="userDataForm"
                    name="userCompanyCountry"
                    type="text"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>
                    Do you have a partners who have a participation percentage
                    greater than 25%?
                  </label>
                  <div className={styles.checkboxesContainer}>
                    <div>
                      <input
                        form="userDataForm"
                        name="userMayorParticipation"
                        type="checkbox"
                      />
                      <p>Yes</p>
                    </div>
                    <div>
                      <input
                        form="userDataForm"
                        name="userNotMayorParticipation"
                        type="checkbox"
                      />
                      <p>No</p>
                    </div>
                  </div>
                </div>
              </section>
              <article id={styles.legalDocumentation}>
                <h3>Legal Documentation</h3>
                <p>
                  In order to verify your identity, some documentation is
                  needed. Please upload it here:
                </p>
                <div id={styles.legalRequirementsContainer}>
                  <article className={styles.legalRequirement}>
                    <Image
                      src="/profile/icons/upload-icon-main.svg"
                      alt="Upload Icon"
                      width="24"
                      height="24"
                    />
                    <div>
                      <h4>ID or Passport</h4>
                      <p>Upload File or Drag and drop</p>
                    </div>
                  </article>
                  <article className={styles.legalRequirement}>
                    <Image
                      src="/profile/icons/upload-icon-main.svg"
                      alt="Upload Icon"
                      width="24"
                      height="24"
                    />
                    <div>
                      <h4>Proof of Registration</h4>
                      <p>Upload File or Drag and drop</p>
                    </div>
                  </article>
                  <article className={styles.legalRequirement}>
                    <Image
                      src="/profile/icons/upload-icon-main.svg"
                      alt="Upload Icon"
                      width="24"
                      height="24"
                    />
                    <div>
                      <h4>Article of Association</h4>
                      <p>Upload File or Drag and drop</p>
                    </div>
                  </article>
                </div>
              </article>
              <button form="userDataForm" type="submit">
                Submit Now
              </button>
            </form>
          </article>
        </article>
      </section>
    </main>
  );
}

PersonalInformation.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
