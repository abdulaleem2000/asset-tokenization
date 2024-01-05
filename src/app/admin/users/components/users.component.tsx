import styles from "@/styles/pages/investments/components/investment.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function Users(props: any) {
  console.log(props.data.kyc);

  return (
    <main id={styles.investment}>
      <div
        id={
          styles.imageAndStatusUser
        } /*style={{ backgroundImage: `url(${})` }}*/
      >
        <div className={styles.imageDiv}>$186,000</div>
      </div>
      <div id={styles.investmentInformation}>
        <div>
          <h3>{props.data.username}</h3>
        </div>
        <div>
          <div>
            <Image
              src="/investments/icons/location-icon.svg"
              alt="Location Icon"
              height="16"
              width="16"
            />
            <p>{props.data.email}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Member Since:</p>
            <p>
              <b>{props.data.dateCreated}</b>
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>Role:</p>
            <p>
              <b>{props.data.rol}</b>
            </p>
          </div>
        </div>
      </div>
      {props.data.kyc ? (
        <Link
          href={{
            pathname: "/admin/user-details",
            query: {
              _id: props.data._id,
            },
          }}
        >
          <div id={styles.viewContainer}>
            <h4>View User Details</h4>
            <Image
              src="/dashboard/content/icons/arrow-right-main.svg"
              alt="Arrow Icon Pointing Right"
              height="24"
              width="24"
            />
          </div>
        </Link>
      ) : (
        <Link
          href={{
            pathname: "/admin/verification-kyc",
            query: {
              _id: props.data._id,
            },
          }}
        >
          <div id={styles.viewContainer}>
            <h4>Verify User</h4>
            <Image
              src="/dashboard/content/icons/arrow-right-main.svg"
              alt="Arrow Icon Pointing Right"
              height="24"
              width="24"
            />
          </div>
        </Link>
      )}
    </main>
  );
}
