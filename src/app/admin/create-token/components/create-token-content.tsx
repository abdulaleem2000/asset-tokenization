import styles from "@/styles/pages/create-token/components/create-token-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Switch from "@/components/switch";
import { useState } from "react";
import CreateTokenForm from "./create-token.form";

export default function CreateTokenContent() {
  const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const option = e.currentTarget;

    const currentCreationOption = document.querySelector(
      `.${styles.currentCreationOption}`
    );
    currentCreationOption!.classList.remove(styles.currentCreationOption);
    option.classList.add(styles.currentCreationOption);
  };

  return (
    <main id={styles.createContentView}>
      <ContentHeader />
      <article id={styles.creationSelector}>
        <div
          id={styles.createTokenOption}
          className={`${styles.creationOption} ${styles.currentCreationOption}`}
          onClick={handleOptionClick}
        >
          <p>Create Token</p>
        </div>
        <div
          id={styles.createPresaleOption}
          className={styles.creationOption}
          onClick={handleOptionClick}
        >
          <p>Create Token Presale</p>
        </div>
        <div
          id={styles.createLockerOption}
          className={styles.creationOption}
          onClick={handleOptionClick}
        >
          <p>Create Token Locker</p>
        </div>
        <div
          id={styles.createNftOption}
          className={styles.creationOption}
          onClick={handleOptionClick}
        >
          <p>Create NFT</p>
        </div>
        <div
          id={styles.createAirdropOption}
          className={styles.creationOption}
          onClick={handleOptionClick}
        >
          <p>Create Airdrop</p>
        </div>
      </article>
      <article className={styles.currentForm}>
        <CreateTokenForm />
      </article>
    </main>
  );
}
