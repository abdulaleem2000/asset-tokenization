"use client";
import { utils } from "ethers";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import styles from "@/styles/kyc.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import Menu from "@/components/menu.component";
import axios from "axios";
import Image from "next/image";
import ContentHeader from "@/components/content-header_admin";
import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import { Toaster, toast } from "react-hot-toast";

const ViewInvestment = () => {
  const searchParams = useSearchParams();
  const data1 = searchParams.get("numberOfTokens");
  console.log("data", data1);
  const [userData, setUserData] = useState("userData");
  const contractAddress = "0x0d49Fcb0812bB41407ecD528f83Fa5C688E546f9";
  const { contract } = useContract(contractAddress);
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "purchaseTokens"
  );
  const name = searchParams.get("name");
  const direction = searchParams.get("direction");
  const query = name! + direction;
  console.log(query);

  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.namedItem("value") as HTMLInputElement;

    setAmount(value.value);
    // Use the amount value for further processing
    console.log(amount);
  };

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
    <main id={styles.InvestmentView}>
      <Menu userData={userData} />

      <section id={styles.contentSection}>
        <div className={styles.contentHeaderS}>
          <ContentHeader />
        </div>
        <Toaster />
        <article id={styles.mainBody}>
          <div className={styles.subMainBody}>
            <div className={styles.propertyName}>
              <h1 className={styles.text}>{searchParams.get("name")}</h1>
              <h1 className={styles.text}>${searchParams.get("amount")}</h1>
            </div>
            <div className={styles.location}>
              <Image
                src="/investments/icons/location-icon.svg"
                alt="Location Icon"
                height="16"
                width="16"
              />
              <p>{searchParams.get("direction")}</p>
            </div>
          </div>

          {/* ADD HERE */}
          <div id={styles.userDetails}>
            <div className={styles.headerUserDetails}>
              <div className={styles.namePlate}>
                <h1 className={styles.text}>Investment Details</h1>

                <p>View all the important details</p>
              </div>
            </div>

            <div className={styles.userDetailsMainBody}>
              <div className={styles.userDetailsText}>
                <h4>Interest Payment: </h4>
                <p>{searchParams.get("interestPayment")}</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Tokens: </h4>
                <p>{searchParams.get("numberOfTokens")}</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Token Price: </h4>
                <p>
                  {Number(searchParams.get("tokenPrice")) / 1000000000000000000}{" "}
                  matic / token
                </p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Minimum Investment: </h4>
                <p>{Number(searchParams.get("minInvestment"))/ 1000000000000000000} matic</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Gross Annual Rent: </h4>
                <p>{searchParams.get("grossAnnualRent")}$</p>
              </div>

              <div className={styles.userDetailsText}>
                <h4>Deadline: </h4>
                <p>{searchParams.get("deadline")}</p>
              </div>
              <div className={styles.userDetailsText}>
                <h4>Home Interest:</h4>
                <p>{searchParams.get("homeInterest")} year</p>
              </div>
            </div>
            <h1>Buy Tokens:</h1>
            <form onSubmit={handleSubmit} name="valueForm">
              <label>
                Amount:
                <input name="value" type="text" />
              </label>
              <button type="submit">Submit</button>
            </form>
            <Web3Button
              contractAddress={contractAddress}
              // Calls the "setName" function on your smart contract with "My Name" as the first argument
              action={() =>
                mutateAsync({
                  args: [query],
                  overrides: {
                    value: utils.parseEther(amount), // send 0.1 native token with the contract call
                  },
                })
              }
              onSuccess={(result) => {
                console.log(result);
                toast.success("Token Bought!");
                //router.push("/admin/properties-management");
              }}
            >
              Send Transaction
            </Web3Button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ViewInvestment;
ViewInvestment.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
