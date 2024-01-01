import Image from "next/image";
import styles from "@/styles/dashboard.module.sass";

const InvestmentsDashBoard = (props: any) => {
  const userAddress = props.data.userAddress;
  const shortenedAddress = `${userAddress.substring(
    0,
    6
  )}....${userAddress.substring(userAddress.length - 5)}`;

  return (
    <div>
      <div className={styles.userInvestment}>
        <div className={styles.investmentPart}>
          <Image
            src="/dashboard/content/investment-willson-apartment.png"
            alt="Investment Image"
            width="56"
            height="56"
          />
          <div>
            <h4>{props.data.query}</h4>
            <p>{shortenedAddress}</p>
            {/* <p>02/16/2024</p> */}
          </div>
        </div>
        <div
          className={`${styles.investmentPart} ${styles.lastInvestmentPart}`}
        >
          <div>
            <h4>{props.data.tokenPurchase.toString()}</h4>
            <p>Matic Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsDashBoard;
