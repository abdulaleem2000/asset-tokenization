import styles from "@/styles/pages/investments/components/investments-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Investment from "./investment.component";
import CategorySelector from "./category-selector.component";

export default function InvestmentsContent() {
  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article id={styles.categorySelector}>
        <div>
          <h2>Real State</h2>
          <CategorySelector />
        </div>
        <button>Add Property</button>
      </article>
      <article id={styles.investmentsContainer}>
        <Investment />
        <Investment />
        <Investment />
        <Investment />
        <Investment />
        <Investment />
        <Investment />
      </article>
    </main>
  );
}
