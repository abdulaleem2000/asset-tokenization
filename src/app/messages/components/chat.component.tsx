import styles from "@/styles/pages/messages/components/chat.module.sass";
import Image from "next/image";
import Message from "./message.component";

export default function Chat() {
  return (
    <main id={styles.chatView}>
      <article id={styles.chatHeader}>
        <div>
          <Image
            src="/generic-user-image.jpg"
            alt="User Image"
            width="56"
            height="56"
          />
          <div>
            <h3>Jane Cooper</h3>
            <p className={styles.onlineText}>Online</p>
          </div>
        </div>
        <Image
          src="/dashboard/chat/icons/options-icon.svg"
          alt="Options Icon"
          height="52"
          width="52"
        />
      </article>
      <article id={styles.chatSection}>
        <Message />
      </article>
      <form id={styles.sendForm}>
        <input placeholder="Start typing here..." />
        <div>
          <Image
            src="/messages/icons/add-image.svg"
            alt="Add Image Icon"
            width="32"
            height="32"
          />
          <Image
            src="/messages/icons/attach.svg"
            alt="Attach Icon"
            width="32"
            height="32"
          />
          <Image
            src="/messages/icons/send.svg"
            alt="Send Icon"
            width="32"
            height="32"
          />
        </div>
      </form>
    </main>
  );
}
