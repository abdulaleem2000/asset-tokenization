"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/menu.module.sass";
import { MenuProps } from "@/types/props/menu-props.interface";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";

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
        <Link href="/Investor/dashboard">
          <article
            className={
              usePathname() === "/Investor/dashboard"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/homepage-icon-white.svg"
              alt="Homapage Icon"
              width="24"
              height="24"
            />
            <p>Homepage</p>
          </article>
        </Link>
        <Link href="/Investor/wallet">
          <article
            className={
              usePathname() === "/Investor/wallet"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/wallet-icon-black.svg"
              alt="Wallet Icon"
              width="24"
              height="24"
            />
            <p>Wallet</p>
          </article>
        </Link>
        <Link href="/Investor/qna">
          <article
            className={
              usePathname() === "/Investor/qna"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/bookmark-icon-black.svg"
              alt="Bookmark Icon"
              width="24"
              height="24"
            />
            <p>Training</p>
          </article>
        </Link>
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
        <Link href="/Investor/investments-made">
          <article
            className={
              usePathname() === "/Investor/investments-made"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/dollar-icon-black.svg"
              alt="Dollar Icon"
              width="24"
              height="24"
            />
            <p>Investments</p>
          </article>
        </Link>
      </article>
      <article className={styles.menuArticle}>
        <h4>CATEGORIES</h4>
        <Link href="/Investor/investments">
          <article
            className={
              usePathname() === "/Investor/investments"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
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

            {/* <p>40</p> */}
          </article>
        </Link>
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
        <Link href="/Investor/profile/personal-information">
          <article
            className={
              usePathname() === "/Investor/profile/personal-information"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/settings-icon-black.svg"
              alt="Settings Icon"
              width="24"
              height="24"
            />
            <p>Settings</p>
          </article>
        </Link>
        <Link href="/Investor/profile">
          <article
            className={
              usePathname() === "/Investor/profile"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/user-icon-black.svg"
              alt="User Icon"
              width="24"
              height="24"
            />
            <p>Profile</p>
          </article>
        </Link>
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
