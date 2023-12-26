"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/menu.module.sass";
import { MenuProps } from "@/types/props/menu-props.interface";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Menu({ userData }: any) {
  const router = useRouter();

  async function logout() {
    try {
      await axios.get("/api/user/logout");
      router.push("/");
    } catch (err: any) {
      console.log(err.message);
    }
  }
  return (
    <section id={styles.menuSection}>
      <div id={styles.userChip}>
        <Image
          src="/generic-user-image.jpg"
          alt="User Image"
          width="64"
          height="64"
        />
        <div>
          <h3>{userData.username}</h3>
          <p>{userData.rol}</p>
        </div>
      </div>

      <article className={styles.menuArticle}>
        <h4>MENU</h4>
        <article className={styles.menuOption}>
          <Link href="/Investor/dashboard">
            <Image
              src="/dashboard/menu/icons/homepage-icon-white.svg"
              alt="Homapage Icon"
              width="24"
              height="24"
            />
            <p>Homepage</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/Investor/wallet">
            <Image
              src="/dashboard/menu/icons/wallet-icon-black.svg"
              alt="Wallet Icon"
              width="24"
              height="24"
            />
            <p>Wallet</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="">
            <Image
              src="/dashboard/menu/icons/bookmark-icon-black.svg"
              alt="Bookmark Icon"
              width="24"
              height="24"
            />
            <p>Training</p>
          </Link>
        </article>
        {/* <article className={styles.menuOption}>
          <Link href="/messages">
            <Image
              src="/dashboard/menu/icons/chat-icon-black.svg"
              alt="Chat Icon"
              width="24"
              height="24"
            />
            <p>Messages</p>
          </Link>
        </article> */}
        <article className={styles.menuOption}>
          <Link href="/Investor/investments-made">
            <Image
              src="/dashboard/menu/icons/dollar-icon-black.svg"
              alt="Dollar Icon"
              width="24"
              height="24"
            />
            <p>Investments</p>
          </Link>
        </article>
      </article>
      <article className={styles.menuArticle}>
        <h4>CATEGORIES</h4>
        <article className={`${styles.menuOption} `}>
          <Link href="/Investor/investments">
            <Image
              src="/dashboard/menu/icons/building-4.svg"
              alt="Dollar Icon"
              width="24"
              height="24"
            />
            <p>
              {/* <input type="checkbox" className={styles.categoryBox} />{" "} */}
              Properties
            </p>
          </Link>
          {/* <p>40</p> */}
        </article>
        {/* <article className={`${styles.menuOption} ${styles.categoryOption}`}>
          <p>
            <input type="checkbox" className={styles.categoryBox} /> Venture
            Capital
          </p>
          <p>25</p>
        </article>
        <article className={`${styles.menuOption} ${styles.categoryOption}`}>
          <p>
            <input type="checkbox" className={styles.categoryBox} /> Auctions
          </p>
          <p>20</p>
        </article> */}

        {/* <div id={styles.categoriesShowMore}>
          <Image
            src="/dashboard/menu/icons/arrow-down-icon-gray.svg"
            alt="Arrow Down Icon"
            height="14"
            width="14"
          />
          <p>Show More</p>
      </div> */}
      </article>
      <article className={styles.menuArticle}>
        <h4>GENERAL</h4>
        <article className={styles.menuOption}>
          <Image
            src="/dashboard/menu/icons/settings-icon-black.svg"
            alt="Settings Icon"
            width="24"
            height="24"
          />
          <p>Settings</p>
        </article>
        <article className={styles.menuOption}>
          <Link href="/profile">
            <Image
              src="/dashboard/menu/icons/user-icon-black.svg"
              alt="User Icon"
              width="24"
              height="24"
            />
            <p>Profile</p>
          </Link>
        </article>
        <article className={styles.menuOption} onClick={logout}>
          <Image
            src="/dashboard/menu/icons/logout-icon-black.svg"
            alt="Logout Icon"
            width="24"
            height="24"
          />
          <p>Logout</p>
        </article>
      </article>
    </section>
  );
}
