import styles from "@/styles/pages/verification/components/verification.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function Property(props: any) {
  return (
    <main id={styles.verification}>
      <div className={styles.category}>
        <div className={styles.profilePic}>
          <Image
            className={styles.borderRad}
            src="/generic-user-image.jpg"
            alt="Upload Icon"
            width="60"
            height="60"
          />
        </div>
        <div className={styles.content}>
          <h3>{props.data.username}</h3>
          <p>{props.data.email}</p>
        </div>

        <div className={styles.content}>
          <h3>Verification</h3>
          <p>verification2</p>
        </div>

        <div className={styles.content}>
          <h3>Estado</h3>
          <p>verification</p>
        </div>
        <div className={styles.content}>
          <h3>Registration Date</h3>
          <p>1-12-2023</p>
        </div>
        <div className={styles.content}>
          <Link href="/admin/verification-kyc">
            <button> Verification KYC </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
