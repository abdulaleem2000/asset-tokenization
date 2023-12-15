import styles from "@/styles/components/chat-preview.module.sass";
import SearchBar from "./search-bar.component";
import Image from "next/image";
import ChatState from "@/app/messages/components/chat-state.component";

export default function ChatPreview() {
  return (
    <main id={styles.chatSection}>
      <article id={styles.topChatSection}>
        <h2>Chat Details</h2>
        <Image
          src="dashboard/chat/icons/options-icon.svg"
          alt="Options Icon"
          width="35"
          height="35"
        />
      </article>
      <article className={styles.chatSectionPart}>
        <div>
          <div className={styles.topChatDetailsPart}>
            <div>
              <Image
                src="/dashboard/chat/icons/members-icon.svg"
                alt="Members Icon"
                height="20"
                width="20"
              />
              <h4>Members</h4>
              <p>8</p>
            </div>
            <Image
              src="/dashboard/chat/icons/arrow-down-main.svg"
              alt="Arrow Down"
              height="20"
              width="20"
            />
          </div>
          <div id={styles.chatMembersBody}>
            <div
              className={`${styles.chatMember} ${styles.topChatDetailsPart}`}
            >
              <div>
                <Image
                  src="/dashboard/menu/icons/user-icon-black.svg"
                  alt="User Icon"
                  width="42"
                  height="42"
                />
                <h4>Jenny Wilson</h4>
              </div>
              <Image
                src="/dashboard/chat/icons/comment-icon-main.svg"
                alt="User Icon"
                width="24"
                height="24"
              />
            </div>
            <div
              className={`${styles.chatMember} ${styles.topChatDetailsPart}`}
            >
              <div>
                <Image
                  src="/dashboard/menu/icons/user-icon-black.svg"
                  alt="User Icon"
                  width="42"
                  height="42"
                />
                <h4>Jenny Wilson</h4>
              </div>
              <Image
                src="/dashboard/chat/icons/comment-icon-main.svg"
                alt="User Icon"
                width="24"
                height="24"
              />
            </div>
            <div
              className={`${styles.chatMember} ${styles.topChatDetailsPart}`}
            >
              <div>
                <Image
                  src="/dashboard/menu/icons/user-icon-black.svg"
                  alt="User Icon"
                  width="42"
                  height="42"
                />
                <h4>Jenny Wilson</h4>
              </div>
              <Image
                src="/dashboard/chat/icons/comment-icon-main.svg"
                alt="User Icon"
                width="24"
                height="24"
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.topChatDetailsPart}>
            <div>
              <Image
                src="/dashboard/chat/icons/media-icon.svg"
                alt="Media Icon"
                height="20"
                width="20"
              />
              <h4>Media</h4>
              <p>1325</p>
            </div>
            <Image
              src="/dashboard/chat/icons/arrow-down-main.svg"
              alt="Arrow Down"
              height="20"
              width="20"
            />
          </div>
          <div id={styles.mediaBody}>
            <Image
              src="/dashboard/content/investment-willson-apartment.png"
              alt="Chat Media"
              height="72"
              width="75"
            />
            <Image
              src="/dashboard/content/investment-willson-apartment.png"
              alt="Chat Media"
              height="72"
              width="75"
            />
            <Image
              src="/dashboard/content/investment-willson-apartment.png"
              alt="Chat Media"
              height="72"
              width="75"
            />
            <div>
              <p>+1332</p>
            </div>
          </div>
        </div>
      </article>
      <hr />
      <article className={styles.chatSectionPart}>
        <div className={styles.topChatDetailsPart}>
          <div>
            <h4>Members</h4>
            <Image
              src="/dashboard/chat/icons/arrow-down-main.svg"
              alt="Arrow Down"
              height="20"
              width="20"
            />
          </div>
          <Image
            src="/dashboard/chat/icons/compose-icon.svg"
            alt="Componse Message Icon"
            height="24"
            width="24"
          />
        </div>
        <SearchBar category="chat" />
        <div id={styles.messagesBody}>
          <ChatState />
          <ChatState />
          <ChatState />
        </div>
      </article>
    </main>
  );
}
