import styles from "@/styles/pages/messages/components/chat-state.module.sass";
import Image from "next/image";

export default function ChatState() {
  return (
    <main id={styles.chat}>
      <div id={styles.chatAuthorInfo}>
        <Image
          src="/dashboard/menu/icons/user-icon-black.svg"
          alt="User Icon"
          width="42"
          height="42"
        />
        <div>
          <h5>Andy</h5>
          <div>
            <p>8 images</p>
            <p>-</p>
            <p>2 files</p>
          </div>
        </div>
      </div>
      <div className={styles.messageState}>
        <p>2min</p>
      </div>
    </main>
  );
}
