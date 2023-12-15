import styles from "@/styles/pages/investments/components/investment.module.sass";
import Image from "next/image";

export default function Investment() {
  return (
    <main id={styles.investment}>
      <div
        id={styles.imageAndStatus} /*style={{ backgroundImage: `url(${})` }}*/
      >
       <div className={styles.imageDiv}>$186,000</div>
        
      </div>
      <div id={styles.investmentInformation}>
        <div>
          <h3>Property Name</h3>
        </div>
        <div>
          <div>
            <Image
              src="/investments/icons/location-icon.svg"
              alt="Location Icon"
              height="16"
              width="16"
            />
            <p>Location</p>
          </div>
        </div>
        <div>
          <div>
            <p>Probability:</p>
            <p>3%</p>
          </div>
          <div>
            <p>Token:</p>
            <p>$0.2</p>
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
