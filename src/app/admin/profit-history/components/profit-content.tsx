import styles from "@/styles/pages/verification/components/verification-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Profit from "./profit.component";
import CategorySelector from "../../../Investor/investments/components/category-selector.component";
import Link from "next/link";
import SearchBar from "@/components/search-bar.component";

export default function PaymentContent() {
  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article className={styles.header}>
        <div>
            <h1>Profit History</h1>
            <p>This month profit details</p>
          
        </div>
       
        <Link href="/admin/add-property"><button>This Month</button></Link>
        
      </article>
      <article id={styles.investmentsContainer}>
       <Profit/>
       <Profit/>
       <Profit/>
       <Profit/>
      </article>
    </main>
  );
}
