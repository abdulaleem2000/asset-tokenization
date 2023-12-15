import styles from "@/styles/pages/investments/components/investment.module.sass";
import Image from "next/image";

export default function Users() {
  return (
    <main id={styles.investment}>
      <div
        id={styles.imageAndStatusUser} /*style={{ backgroundImage: `url(${})` }}*/
      >
       <div className={styles.imageDiv}>$186,000</div>
        
      </div>
      <div id={styles.investmentInformation}>
        <div>
          <h3>Esther Howard</h3>
        </div>
        <div>
          <div>
            <Image
              src="/investments/icons/location-icon.svg"
              alt="Location Icon"
              height="16"
              width="16"
            />
            <p>esther@gmail.com</p>
          </div>
        </div>
        <div>
          <div>
            <p>Member Since:</p>
            <p><b>1-02-2023</b></p>
          </div>
          
        </div>
      </div>
      <div id={styles.viewContainer}>
        <h4>Register Purchase</h4>
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
