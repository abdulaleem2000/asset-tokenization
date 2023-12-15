import styles from "@/styles/pages/investments/components/investment.module.sass";
import Image from "next/image";

export default function Property(props: any) {
  return (
    <main id={styles.investment}>
      <div
        id={styles.imageAndStatus} /*style={{ backgroundImage: `url(${})` }}*/
      >
        <div className={styles.imageDiv}>11/06/2023</div>
        <div className={styles.imageDiv}>Available</div>
      </div>
      <div id={styles.investmentInformation}>
        <div>
          <h3>{props.data.name}</h3>
        </div>
        <div>
          <div>
            <Image
              src="/investments/icons/location-icon.svg"
              alt="Location Icon"
              height="16"
              width="16"
            />
            <p>{props.data.direction}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Price</p>
            <p>{props.data.tokenPrice.toString()}</p>
          </div>
          <div>
            <p>Token:</p>
            <p>{props.data.numberOfTokens.toString()}</p>
          </div>
        </div>
      </div>
      <div id={styles.viewContainer}>
        <h4>View Property</h4>
        <Image
          src="/dashboard/content/icons/arrow-right-main.svg"
          alt="Arrow Icon Pointing Right"
          height="24"
          width="24"
        />
      </div>
    </main>
  );
}
