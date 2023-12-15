import styles from "@/styles/pages/create-token/components/create-forms.module.sass";
import Switch from "@/components/switch";

export default function CreateTokenForm() {
  return (
    <>
      <form name="crateTokenForm" className={styles.tokenCreationForm}>
        <article id={styles.inputsContainer}>
          <div className={styles.formPart}>
            <label>Token Name*</label>
            <input
              name="tokenName"
              type="text"
              placeholder="e.g Good Luck Token"
            />
          </div>
          <div className={styles.formPart}>
            <label>Symbol*</label>
            <input name="tokenSymbol" type="text" placeholder="e.g GLT" />
          </div>
          <div className={styles.formPart}>
            <label>Initial Supply*</label>
            <input
              name="tokenInitialSupply"
              type="number"
              placeholder="10000"
            />
          </div>
          <div className={styles.formPart}>
            <label>Decimals*</label>
            <input
              name="tokeDecimals"
              type="number"
              placeholder="e.g 18"
              maxLength={2}
            />
          </div>
        </article>
        <div id={styles.switchAdvancedSettings}>
          <Switch />
          <p>Advance Settings</p>
        </div>
        <article id={styles.advancedSettings}>
          <div>
            <input type="checkbox" />
            <p>Can Burn</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Can Pause</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Blacklist</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Deflation</p>
          </div>
        </article>
        <button>Create Token</button>
      </form>
    </>
  );
}
