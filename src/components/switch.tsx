import styles from "@/styles/components/switch.module.sass";

export default function Switch() {
  return (
    <>
      <input
        className={styles.switchCheckbox}
        id={styles.switchNew}
        type="checkbox"
      />
      <label className={styles.switchLabel} htmlFor={styles.switchNew}>
        <span className={styles.switchButton} />
      </label>
    </>
  );
}
