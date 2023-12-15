import styles from "@/styles/components/search-bar.module.sass";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchBar({ category }: any) {
  const [isChatBar, setIsChatBar] = useState(false);

  useEffect(() => {
    if (category !== "TOP-BAR") setIsChatBar(true);
  }, []);

  useEffect(() => {
    if (isChatBar) {
      const searchBar = document.querySelector(`#${styles.searchBar}`);

      searchBar!.classList.add(styles.chatSearcher);
    }
  }, [isChatBar]);
  if(isChatBar === true){
    return (
      <article id={styles.searchBar}>
        <div>
          <Image
            src="/dashboard/content/icons/lupe-icon-gray.svg"
            alt="Lupe Icon"
            height="20"
            width="20"
          />
          <input
            type="text"
            placeholder= "Choose the Date"
          />
        </div>
        
       
        <Image
            src="/dashboard/menu/icons/event-calender-date.svg"
            alt="Calender Icon"
            height="24"
            width="24"
           
          />
       
      </article>
    );
  }
  else {
    return (
      <article id={styles.searchBar}>
        <div>
          <Image
            src="/dashboard/content/icons/lupe-icon-gray.svg"
            alt="Lupe Icon"
            height="20"
            width="20"
          />
          <input
            type="text"
            placeholder={!isChatBar ? "Need any Assitances" : "Search"}
          />
        </div>
        
        {isChatBar &&  <Image
            src="/dashboard/content/icons/event-calender-date.svg"
            alt="Mircrophone Icon"
            height="24"
            width="24"
            hidden={isChatBar}
          /> }
        <Image
            src="/dashboard/content/icons/micro-icon-main.svg"
            alt="Mircrophone Icon"
            height="24"
            width="24"
            hidden={isChatBar}
          />
       
      </article>
    );
  }
  
}
