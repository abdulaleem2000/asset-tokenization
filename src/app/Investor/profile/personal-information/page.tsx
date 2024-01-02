"use client";
import Menu from "@/components/menu.component";
import styles from "@/styles/pages/profile/components/personal-informaion.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import Image from "next/image";
import ContentHeader from "@/components/content-header.component";
import { ReactNode, useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import router from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { read } from "fs";
interface UserData {
  _id?: string;

  // other properties...
}
export default function PersonalInformation() {
  const [loadingData, setIsLoadingData] = useState(true);
  const [userData, setUserData] = useState<UserData>({});
  const [file, setFile] = useState<string>("");

  const fileBase64 = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const data = new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

    return data;
  };

  // const fileBase64 = (file: File): Promise<string> => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.readAsArrayBuffer(file);

  //     reader.onload = () => {
  //       if (reader.result instanceof ArrayBuffer) {
  //         const binaryData = new Buffer(reader.result); // or use Buffer.from(reader.result)
  //         const base64String = binaryData.toString("base64");
  //         resolve(base64String);
  //       } else {
  //         reject(new Error("Failed to read file as ArrayBuffer."));
  //       }
  //     };

  //     reader.onerror = (err) => {
  //       reject(err);
  //     };
  //   });
  // };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   const binaryData = reader.result as ArrayBuffer;
      //   // Now you can use the binaryData to store in MongoDB or perform other actions.

      //   const base64Data = binaryData.toString();
      //   console.log(base64Data);
      //   console.log(binaryData);
      // };

      // reader.readAsArrayBuffer(selectedFile);

      const file64 = await fileBase64(selectedFile);
      if (typeof file64 === "string") {
        setFile(file64);
      }
      console.log(typeof file64);

      console.log(file);
    }
  };
  //S console.log(file);
  async function handleProfileSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const form = e.currentTarget;

      const name = form.elements.namedItem("firstName") as HTMLInputElement;
      const lastName = form.elements.namedItem("lastName") as HTMLInputElement;
      const dob = form.elements.namedItem("dateOfBirth") as HTMLInputElement;
      const nationality = form.elements.namedItem(
        "userNationality"
      ) as HTMLInputElement;
      const tel = form.elements.namedItem("userTelephone") as HTMLInputElement;
      const userId = form.elements.namedItem("userId") as HTMLInputElement;
      const userAddress = form.elements.namedItem(
        "userAddress"
      ) as HTMLInputElement;
      const userCity = form.elements.namedItem("userCity") as HTMLInputElement;
      const userRegion = form.elements.namedItem(
        "userRegion"
      ) as HTMLInputElement;
      const userPostalCode = form.elements.namedItem(
        "userPostalCode"
      ) as HTMLInputElement;
      const userCountry = form.elements.namedItem(
        "userCountry"
      ) as HTMLInputElement;
      const userRepresentingCompany = form.elements.namedItem(
        "userRepresentingCompany"
      ) as HTMLInputElement;
      const userCompany = form.elements.namedItem(
        "userCompany"
      ) as HTMLInputElement;
      const userTaxId = form.elements.namedItem(
        "userCompanyTaxId"
      ) as HTMLInputElement;
      const userCompanyAddress = form.elements.namedItem(
        "userCompanyAddress"
      ) as HTMLInputElement;
      const userCompanyCity = form.elements.namedItem(
        "userCompanyCity"
      ) as HTMLInputElement;
      const userCompanyRegion = form.elements.namedItem(
        "userCompanyRegion"
      ) as HTMLInputElement;
      const userCompanyPostalCode = form.elements.namedItem(
        "userCompanyPostalCode"
      ) as HTMLInputElement;
      const userCompanyCountry = form.elements.namedItem(
        "userCompanyCountry"
      ) as HTMLInputElement;
      const dobStr = dob.value.toString();
      console.log(dobStr);
      const data = {
        name: name.value,
        surname: lastName.value,
        nationality: nationality.value,
        dob: dobStr,
        phone_number: tel.value,
        id: userId.value,
        address: userAddress.value,
        city: userCity.value,
        region: userRegion.value,
        postal_code: userPostalCode.value,
        country: userCountry.value,
        representing_company: userRepresentingCompany.value,
        company_name: userCompany.value,
        company_tax_id: userTaxId.value,
        company_address: userCompanyAddress.value,
        company_city: userCompanyCity.value,
        company_region: userCompanyRegion.value,
        company_postal_code: userCompanyPostalCode.value,
        company_country: userCompanyCountry.value,
        id_passport: file,
      };
      const subUserData = {
        id: userData["_id"],
      };

      const response = await axios.post("/api/user/add-user-details", [
        data,
        subUserData,
      ]);
      if (response.status !== 200)
        throw new Error("HTTP error! status: " + response.status);

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

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
      <Toaster />
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
            <form
              onSubmit={handleProfileSubmit}
              id={styles.personalInformationForm}
              name="userDataForm"
            >
              <section>
                <div className={styles.formDivision}>
                  <label>First Name*</label>
                  <input name="firstName" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Last Name*</label>
                  <input name="lastName" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Date of Birth*</label>
                  <input name="dateOfBirth" type="date" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Nationality*</label>
                  <input name="userNationality" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Telephone*</label>
                  <input name="userTelephone" type="tel" required />
                </div>
                <div className={styles.formDivision}>
                  <label>ID or Passport Number*</label>
                  <input name="userId" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Address*</label>
                  <input name="userAddress" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>City*</label>
                  <input name="userCity" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Region*</label>
                  <input name="userRegion" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Postal Code*</label>
                  <input name="userPostalCode" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Country*</label>
                  <input name="userCountry" type="text" required />
                </div>
                <div className={styles.formDivision}>
                  <label>Are you representing a company?</label>
                  <div className={styles.checkboxesContainer}>
                    <div>
                      <input
                        name="userRepresentingCompany"
                        type="radio"
                        value="true"
                      />
                      <p>Yes</p>
                    </div>
                    <div>
                      <input
                        name="userRepresentingCompany"
                        type="radio"
                        value="false"
                      />
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Name*</label>
                  <input name="userCompany" type="text" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Tax Identification Number*</label>
                  <input name="userCompanyTaxId" type="number" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Address*</label>
                  <input name="userCompanyAddress" type="text" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company City*</label>
                  <input name="userCompanyCity" type="text" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Region*</label>
                  <input name="userCompanyRegion" type="text" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Postal Code*</label>
                  <input name="userCompanyPostalCode" type="number" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Company Country*</label>
                  <input name="userCompanyCountry" type="text" required />
                </div>
                {/* <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>
                    Do you have a partners who have a participation percentage
                    greater than 25%?
                  </label>
                  <div className={styles.checkboxesContainer}>
                    <div>
                      <input
                        
                        name="userMayorParticipation"
                        type="checkbox"
                      />
                      <p>Yes</p>
                    </div>
                    <div>
                      <input
                        
                        name="userNotMayorParticipation"
                        type="checkbox"
                      />
                      <p>No</p>
                    </div>
                  </div>
                </div> */}
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
                      <p>Upload Image</p>
                      <input
                        type="file"
                        name="idDocument"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                  </article>
                  {/* <article className={styles.legalRequirement}>
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
                  </article> */}
                </div>
              </article>
              <button type="submit">Submit Now</button>
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
