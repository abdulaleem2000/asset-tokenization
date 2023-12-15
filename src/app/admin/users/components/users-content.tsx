import styles from "@/styles/pages/investments/components/investments-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import User from "./users.component";
import SearchBar from "../../../../components/search-bar.component";

export default function UsersContent() {
  return (
    <main id={styles.investmentsContent}>
      <ContentHeader />
      <article className={styles.header}>
        <div>
          <h2>Users</h2>
          
        </div>
        <button>Discharge</button>
        
       
        <SearchBar category={""} />

          
      </article>
      <article id={styles.investmentsContainer}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </article>
    </main>
  );
}
