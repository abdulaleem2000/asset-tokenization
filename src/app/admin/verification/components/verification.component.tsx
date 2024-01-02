import styles from "@/styles/pages/verification/components/verification.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function Property(props: any) {
  const date = props.data.dateCreated.split("T");
  console.log(date);

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
          {props.data.kyc ? <p>Verified</p> : <p>Not Verified</p>}
        </div>

        <div className={styles.content}>
          <h3>State</h3>
          {props.data.kyc ? <p>Completed</p> : <p>Progressing</p>}
        </div>
        <div className={styles.content}>
          <h3>Registration Date</h3>
          <p>{date[0]}</p>
        </div>
        <div className={styles.content}>
          <Link
            href={{
              pathname: "/admin/verification-kyc",
              query: {
                _id: props.data._id,
              },
            }}
          >
            {props.data.kyc ? <p></p> : <button> Verification KYC </button>}
          </Link>
        </div>
      </div>
    </main>
  );
}
