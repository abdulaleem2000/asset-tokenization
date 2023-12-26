import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/content-header.module.sass";
import SearchBar from "./search-bar.component";

export default function ContentHeader({ userData }: any) {
  return (
    <main>
      <article id={styles.contentHeader}>
        <div className={styles.contentHeaderPart}>
          <div>
            <h2>Good Morning</h2>
          </div>
          <div className={styles.contentHeaderPart}>
            <SearchBar category={"TOP-BAR"} />
            <Image
              src="/dashboard/content/icons/bell-icon-black.svg"
              alt="Bell Icon"
              width="25"
              height="25"
            />
          </div>
        </div>
        <div id={styles.completeUserAlert}>
          <Image
            src="/dashboard/content/icons/alert-bell-main.png"
            alt="Alert Bell"
            height="24"
            width="24"
          />
          <p>
            Please finish your profile{" "}
            <Link href="/profile/personal-information">
              Edit now
              <Image
                src="/dashboard/content/icons/pencil-icon-main.svg"
                alt="Bell Icon"
                width="18"
                height="18"
              />
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
