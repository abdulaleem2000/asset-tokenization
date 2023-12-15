import styles from "@/styles/pages/verification/components/verification-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Property from "./verification.component";
import CategorySelector from "../../../Investor/investments/components/category-selector.component";
import Link from "next/link";

export default function VerificationContent() {
  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article className={styles.header}>
        <div>
            <h1>Verification</h1>
            <p>Verification Details</p>
          
        </div>
        <Link href="/admin/add-property"><button>Add Property</button></Link>
        
      </article>
      <article id={styles.investmentsContainer}>
       <Property/>
       <Property/>
       <Property/>
       <Property/>
      </article>
    </main>
  );
}
