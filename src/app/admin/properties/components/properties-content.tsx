import styles from "@/styles/pages/investments/components/investments-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Property from "./properties.component";


export default function PropertiesContent() {
  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article >
        <div>
          <h2>Properties</h2>
          
        </div>
       
      </article>
      <article id={styles.investmentsContainer}>
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </article>
    </main>
  );
}
