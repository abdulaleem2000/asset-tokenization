import styles from "@/styles/pages/investments/components/category-selector.module.sass";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CategorySelector() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useEffect(() => {
    const selector = document.querySelector(`#${styles.categorySelector}`);
    const initials = document.querySelectorAll(`.${styles.initialView}`);

    const header = initials[0];
    const image = initials[1];

    if (categoriesOpen) {
      header.classList.add(styles.hidden);
      image.classList.add(styles.hidden);

      selector!.classList.add(styles.categoriesOpen);
    } else {
      header.classList.remove(styles.hidden);
      image.classList.remove(styles.hidden);

      selector!.classList.remove(styles.categoriesOpen);
    }
  }, [categoriesOpen]);

  return (
    <main
      id={styles.categorySelector}
      onClick={() => setCategoriesOpen(!categoriesOpen)}
    >
      <h2 className={styles.initialView}>Categories</h2>
      <Image
        src="/dashboard/chat/icons/arrow-down-main.svg"
        alt="Arrow Down Icon"
        width="24"
        height="24"
        className={styles.initialView}
      />
    </main>
  );
}
