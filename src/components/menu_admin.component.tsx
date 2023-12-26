"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/menu.module.sass";
import { MenuProps } from "@/types/props/menu-props.interface";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Menu({ userData }: any) {
  const router = useRouter();
  // console.log(userData.is_admin);
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
          <Link href="/admin/dashboard">
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
          <Link href="/admin/properties">
            <Image
              src="/dashboard/menu/icons/building-4.svg"
              alt="Building Icon"
              width="24"
              height="24"
            />
            <p>Properties</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/properties-management">
            <Image
              src="/dashboard/menu/icons/building-4.svg"
              alt="Building Icon"
              width="24"
              height="24"
            />
            <p>Properties Management</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/users">
            <Image
              src="/dashboard/menu/icons/user-icon-black.svg"
              alt="Bookmark Icon"
              width="24"
              height="24"
            />
            <p>Users</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/verification">
            <Image
              src="/dashboard/menu/icons/tick-circle.svg"
              alt="Tick Icon"
              width="24"
              height="24"
            />
            <p>Verification</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/privately-config">
            <Image
              src="/dashboard/menu/icons/dollar-icon-black.svg"
              alt="Dollar Icon"
              width="24"
              height="24"
            />
            <p>Privately Configuration</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/payment-history">
            <Image
              src="/dashboard/menu/icons/wallet-icon-black.svg"
              alt="Wallet Icon"
              width="24"
              height="24"
            />
            <p>Payment History</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/shipping-history">
            <Image
              src="/dashboard/menu/icons/shipping-box-02.svg"
              alt="Shipping Icon"
              width="24"
              height="24"
            />
            <p>Shipping History</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/profit-history">
            <Image
              src="/dashboard/menu/icons/dollar-icon-black.svg"
              alt="Dollar Icon"
              width="24"
              height="24"
            />
            <p>Profit History</p>
          </Link>
        </article>
        <article className={styles.menuOption}>
          <Link href="/admin/create-token">
            <Image
              src="/dashboard/menu/icons/plus-icon.svg"
              alt="Wallet Icon"
              width="24"
              height="24"
            />
            <p>Create Token</p>
          </Link>
        </article>
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
