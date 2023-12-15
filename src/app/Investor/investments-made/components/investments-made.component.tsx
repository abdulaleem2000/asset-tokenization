"use client";
import styles from "@/styles/pages/verification/components/profit.module.sass";
import Image from "next/image";

export default function Payment(props: any) {
  return (
    <main id={styles.verification}>
      <div className={styles.category}>
        <div className={styles.profilePic}>
          <Image
            className={styles.borderRad}
            src="/dashboard/content/girl.jpeg"
            alt="Upload Icon"
            width="60"
            height="60"
          />
        </div>
        <div className={styles.content}>
          <h3>Esther</h3>
          <p>{props.data.userAddress}</p>
        </div>
        <div className={styles.content}>
          <h3>Property</h3>
          <p>{props.data.query}</p>
        </div>
        <div className={styles.content}>
          <h3>Address</h3>
          <p>wah g wah house gulbertown, hasilpur</p>
        </div>

        <div className={styles.content}>
          <h3>Token Bought</h3>
          <p>{props.data.tokenPurchase.toString()}</p>
        </div>

        <div className={styles.content}>
          <h3>Token</h3>
          <p>USDT</p>
        </div>

        <div className={styles.content}>
          <h3>Date</h3>
          <p>USDT</p>
        </div>

        <div className={styles.content}>
          <h3>Owner</h3>
          <p>USDT</p>
        </div>
      </div>
    </main>
  );
}
