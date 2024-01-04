"use client";
import Menu from "@/components/menu_admin.component";
import styles from "@/styles/pages/profile/components/personal-informaion.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import Image from "next/image";
import ContentHeader from "@/components/content-header.component";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import {
  Web3Button,
  useContract,
  useContractWrite,
  useContractEvents,
} from "@thirdweb-dev/react";

import { tokenContract } from "@/types/constants/contract-address";

import { set } from "mongoose";
import { validateHeaderValue } from "http";
import { LogDescription } from "ethers/lib/utils";
import { utils } from "ethers";

export default function AddProperty() {
  const router = useRouter();

  const [loadingData, setIsLoadingData] = useState(true);
  const [userData, setUserData] = useState({});

  const [assetData, setAssetData] = useState({});
  const [assetData2, setAssetData2] = useState({});

  const [tokenPrice, setTokenPrice] = useState("");
  const [Web3ButtonDisplay, setWeb3ButtonDisplay] = useState(false);
  //const contractAddress = "0x5Ff135846589d6B492c1928541d0F0bD7FE68f27";
  //client address
  // const contractAddress = "0x1f7CC67Ce6745E6c2cd7811e6169139979Bd37BD";
  const contractAddress = tokenContract;
  const { contract } = useContract(contractAddress);

  const { mutateAsync, isLoading, error } = useContractWrite(contract, "mint");

  const { data } = useContractEvents(contract, "Mint");

  //handling submission
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const form = e.currentTarget;

      const name = form.elements.namedItem("Name") as HTMLInputElement;
      const direction = form.elements.namedItem(
        "direction"
      ) as HTMLInputElement;
      const amount = form.elements.namedItem("amount") as HTMLInputElement;

      const amountInterest = form.elements.namedItem(
        "amountInterest"
      ) as HTMLInputElement;

      const grossAnnualRent = form.elements.namedItem(
        "grossAnnualRent"
      ) as HTMLInputElement;

      const netAmountRent = form.elements.namedItem(
        "netAmountRent"
      ) as HTMLInputElement;
      const interestPayment = form.elements.namedItem(
        "interestPayment"
      ) as HTMLInputElement;

      const numberOfTokens = form.elements.namedItem(
        "numberOfTokens"
      ) as HTMLInputElement;

      const tokenPrice = form.elements.namedItem(
        "tokenPrice"
      ) as HTMLInputElement;

      const minInvestment = form.elements.namedItem(
        "minInvestment"
      ) as HTMLInputElement;

      const homeInterest = form.elements.namedItem(
        "homeInterest"
      ) as HTMLInputElement;

      const deadline = form.elements.namedItem("deadline") as HTMLInputElement;

      const secMarket = form.elements.namedItem(
        "secMarket"
      ) as HTMLInputElement;

      const currency = form.elements.namedItem("currency") as HTMLInputElement;

      const neighbourhood = form.elements.namedItem(
        "neighbourhood"
      ) as HTMLInputElement;

      const yoc = form.elements.namedItem(
        "yearOfConstruction"
      ) as HTMLInputElement;

      const elevator = form.elements.namedItem("elevator") as HTMLInputElement;

      const buildedSurface = form.elements.namedItem(
        "buildedSurface"
      ) as HTMLInputElement;

      const bedrooms = form.elements.namedItem("bedrooms") as HTMLInputElement;

      const bathrooms = form.elements.namedItem(
        "bathrooms"
      ) as HTMLInputElement;

      const isRented = form.elements.namedItem("rented") as HTMLInputElement;

      const tokenName = form.elements.namedItem(
        "tokenName"
      ) as HTMLInputElement;

      const description = form.elements.namedItem(
        "moreDetails"
      ) as HTMLInputElement;
      const deadlineStr = deadline.value.replace(/-/g, "");
      const yocStr = yoc.value.replace(/-/g, "");
      setAssetData({
        name: name.value,
        direction: direction.value,
        amount: amount.value,
        amountInterest: amountInterest.value,
        grossAnnualRent: grossAnnualRent.value,
        netAmountRent: netAmountRent.value,
        interestPayment: interestPayment.value,
        numberOfTokens: numberOfTokens.value,
        tokenPrice: utils.parseEther(tokenPrice.value),
        minInvestment: utils.parseEther(minInvestment.value),
        homeInterest: homeInterest.value,
        deadline: deadlineStr,
      });
      setAssetData2({
        secMarket: secMarket.value,
        currency: currency.value,
        neighood: neighbourhood.value,
        yoc: yocStr,
        elevator: elevator.value,
        buildedSurface: buildedSurface.value,
        bedrooms: bedrooms.value,
        bathrooms: bathrooms.value,
        isRented: isRented.value,
        tokenName: tokenName.value,
        description: description.value,
        dateCreated: "hello123",
      });
      setTokenPrice(tokenPrice.value);
    } catch (err: any) {
      console.log(err);
    }
    setWeb3ButtonDisplay(true);
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
      <section id={styles.personalInformationSection}>
        <ContentHeader />
        <article>
          <article>
            <form
              onSubmit={handleSubmit}
              id={styles.personalInformationForm}
              name="addPropertyForm"
            >
              <div id={styles.legalRequirementsContainer}>
                <article className={styles.legalRequirement}>
                  <Image
                    src="/profile/icons/upload-icon-main.svg"
                    alt="Upload Icon"
                    width="24"
                    height="24"
                  />
                  <div>
                    <h4>Upload Logo Image</h4>
                    <p>Format should be jpg, png</p>
                  </div>
                </article>
              </div>
              <section>
                <div className={styles.formDivision}>
                  <label>Name*</label>
                  <input
                    name="Name"
                    id="name"
                    type="text"
                    placeholder="e.g john"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Direction</label>
                  <input
                    name="direction"
                    id="direction"
                    type="text"
                    placeholder="e.g Address"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Amount</label>
                  <input
                    name="amount"
                    id="amount"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Amount Interest</label>
                  <input
                    name="amountInterest"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Gross Annual Rent</label>
                  <input
                    name="grossAnnualRent"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Net Amount Rent</label>
                  <input
                    name="netAmountRent"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Interest Payment</label>
                  <input
                    name="interestPayment"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Number of Tokens</label>
                  <input
                    name="numberOfTokens"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div className={styles.formDivision}>
                  <label>Token Price</label>
                  <input
                    name="tokenPrice"
                    id="tokenPrice"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>

                <div className={styles.formDivision}>
                  <label>Minimum Investment</label>
                  <input
                    name="minInvestment"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>

                <div className={styles.formDivision}>
                  <label>Home Interest</label>
                  <input
                    name="homeInterest"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>

                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Deadline</label>
                  <input name="deadline" type="date" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Secondary Market</label>
                  <input
                    name="secMarket"
                    type="text"
                    placeholder="choose"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Currency</label>
                  <input
                    name="currency"
                    type="text"
                    placeholder="choose currency"
                    required
                  />
                </div>
                <div>
                  {
                    //details portion of form
                  }
                  <h2 id={styles.h2}>Details</h2>
                </div>

                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                ></div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                ></div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Neighbourhood</label>
                  <input
                    name="neighbourhood"
                    type="text"
                    placeholder="e.g"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Year of Construction</label>
                  <input name="yearOfConstruction" type="date" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Elevator</label>
                  <input
                    name="elevator"
                    type="text"
                    placeholder="choose Elevator"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Builded Surface (m2)</label>
                  <input
                    name="buildedSurface"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Bedrooms</label>
                  <input name="bedrooms" type="text" placeholder="0" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Bathrooms</label>
                  <input
                    name="bathrooms"
                    type="text"
                    placeholder="0"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Rented</label>
                  <input
                    name="rented"
                    type="text"
                    placeholder="choose"
                    required
                  />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                ></div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                ></div>
                <div>
                  {
                    //blockchain portion of form
                  }
                  <h2 id={styles.h2}>Blockchain</h2>
                </div>

                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                ></div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                ></div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Token Name</label>
                  <input
                    name="tokenName"
                    type="text"
                    placeholder="e.g"
                    required
                  />
                </div>
                {/* <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Smart Contract Token</label>
                  <input name="smartContract" type="date" required />
                </div>
                <div
                  className={`${styles.formDivision} ${styles.formCompanyDivision}`}
                >
                  <label>Liquidity Pool URL</label>
                  <input
                    name="poolUrl"
                    type="text"
                    placeholder="URL"
                    required
                  />
                </div> */}
              </section>
              <article id={styles.legalDocumentation}>
                <div id={styles.legalRequirementsContainer}>
                  <article className={styles.legalRequirement}>
                    <Image
                      src="/profile/icons/upload-icon-main.svg"
                      alt="Upload Icon"
                      width="24"
                      height="24"
                    />
                    <div>
                      <h4>Upload Whitepaper Img</h4>
                      <p>Format should be jpg, png</p>
                    </div>
                  </article>
                </div>
              </article>
              <div>
                {
                  //more details portion of form
                }
                <h2 id={styles.h2}>More Details</h2>
              </div>

              <div
                className={`${styles.formDivision} ${styles.formCompanyDivision}`}
              ></div>
              <div
                className={`${styles.formDivision} ${styles.formCompanyDivision}`}
              ></div>
              <div
                className={`${styles.formDivision} ${styles.formCompanyDivision}`}
              >
                <label>Description</label>
                <textarea
                  name="moreDetails"
                  rows={5}
                  cols={100}
                  placeholder="write some details"
                ></textarea>
              </div>

              <button type="submit" className={styles.buttonForm}>
                Submit Now
              </button>
            </form>

            <div>
              {Web3ButtonDisplay ? (
                <Web3Button
                  contractAddress={contractAddress}
                  // Calls the "setName" function on your smart contract with "My Name" as the first argument
                  action={() =>
                    mutateAsync({
                      args: [
                        // {
                        //   name: "building",
                        //   description: "hello",
                        //   propertyValue: 400000,
                        // },
                        // 1000,

                        assetData,
                        assetData2,
                      ],
                    })
                  }
                  onSuccess={(result) => {
                    console.log(result);
                    toast.success("Asset Tokenized Successfully");
                    router.push("/admin/properties-management");
                  }}
                  onError={(err: any) => {
                    console.log(err);
                  }}
                >
                  Send Transaction
                </Web3Button>
              ) : (
                <p></p>
              )}
            </div>
          </article>
        </article>
      </section>
    </main>
  );
}

AddProperty.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
