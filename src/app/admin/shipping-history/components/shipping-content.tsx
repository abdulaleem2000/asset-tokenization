import styles from "@/styles/pages/verification/components/verification-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Shipping from "./shipping.component";
import CategorySelector from "../../../Investor/investments/components/category-selector.component";
import Link from "next/link";
import SearchBar from "@/components/search-bar.component";

export default function PaymentContent() {
  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article className={styles.header}>
        <div>
            <h1>Shipping History</h1>
            <p>This month shipping details</p>
          
        </div>
       
        <Link href="/admin/add-property"><button>This Month</button></Link>
        
      </article>
      <article id={styles.investmentsContainer}>
       <Shipping/>
       <Shipping/>
       <Shipping/>
       <Shipping/>
      </article>
    </main>
  );
}
