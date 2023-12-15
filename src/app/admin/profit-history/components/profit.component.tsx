import styles from "@/styles/pages/verification/components/profit.module.sass";
import Image from "next/image";

export default function Payment() {
  return (
    <main id={styles.verification}>
      
    <div className={styles.category}>
        <div className={styles.profilePic}>
            <Image className={styles.borderRad}
                src="/dashboard/content/girl.jpeg"
                alt="Upload Icon"
                width="60"
                height="60"
                
            />
        </div>
        <div className={styles.content}>
            <h3>Esther</h3>
            <p>esther@gmail.com</p>
        </div>
        <div className={styles.content}>
            <h3>Property</h3>
            <p>Property Name</p>
        </div>
        <div className={styles.content}>
            <h3>Address</h3>
            <p>wah g wah house gulbertown, hasilpur</p>
        </div>

        <div className={styles.content}>
            <h3>No Token</h3>
            <p>0.01378</p>
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
