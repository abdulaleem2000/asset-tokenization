import styles from "@/styles/pages/messages/components/contacts.module.sass";
import ChatState from "./chat-state.component";
import SearchBar from "@/components/search-bar.component";

export default function ChatContacts() {
  return (
    <main id={styles.contactsView}>
      <SearchBar category="chatContacts" />
      <section id={styles.chatsContainer}>
        <ChatState />
        <ChatState />
        <ChatState />
      </section>
    </main>
  );
}
