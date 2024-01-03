"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/menu.module.sass";
import { MenuProps } from "@/types/props/menu-props.interface";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

export default function Menu({ userData }: any) {
  const router = useRouter();
  console.log(usePathname());
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
        <Link href="/admin/dashboard">
          <article
            className={
              usePathname() === "/admin/dashboard"
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
        <Link href="/admin/properties">
          <article
            className={
              usePathname() === "/admin/properties"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/building-4.svg"
              alt="Building Icon"
              width="24"
              height="24"
            />
            <p>Properties</p>
          </article>
        </Link>
        <Link href="/admin/properties-management">
          <article
            className={
              usePathname() === "/admin/properties-management"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/building-4.svg"
              alt="Building Icon"
              width="24"
              height="24"
            />
            <p>Properties Management</p>
          </article>
        </Link>
        <Link href="/admin/users">
          <article
            className={
              usePathname() === "/admin/users"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/user-icon-black.svg"
              alt="Bookmark Icon"
              width="24"
              height="24"
            />
            <p>Users</p>
          </article>
        </Link>
        <Link href="/admin/verification">
          <article
            className={
              usePathname() === "/admin/verification"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/tick-circle.svg"
              alt="Tick Icon"
              width="24"
              height="24"
            />
            <p>Verification</p>
          </article>
        </Link>
        <Link href="/admin/privately-config">
          <article
            className={
              usePathname() === "/admin/privately-config"
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
            <p>Privately Configuration</p>
          </article>
        </Link>
        <Link href="/admin/payment-history">
          <article
            className={
              usePathname() === "/admin/payment-history"
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
            <p>Payment History</p>
          </article>
        </Link>
        <Link href="/admin/shipping-history">
          <article
            className={
              usePathname() === "/admin/shipping-history"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/shipping-box-02.svg"
              alt="Shipping Icon"
              width="24"
              height="24"
            />
            <p>Shipping History</p>
          </article>
        </Link>
        <Link href="/admin/profit-history">
          <article
            className={
              usePathname() === "/admin/profit-history"
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
            <p>Profit History</p>
          </article>
        </Link>
        <Link href="/admin/create-token">
          <article
            className={
              usePathname() === "/admin/create-token"
                ? styles.menuOptionActive
                : styles.menuOption
            }
          >
            <Image
              src="/dashboard/menu/icons/plus-icon.svg"
              alt="Wallet Icon"
              width="24"
              height="24"
            />
            <p>Create Token</p>
          </article>
        </Link>
      </article>

      <article className={styles.menuArticle}>
        <h4>GENERAL</h4>
        {/* <article className={styles.menuOption}>
          <Image
            src="/dashboard/menu/icons/settings-icon-black.svg"
            alt="Settings Icon"
            width="24"
            height="24"
          />
          <p>Settings</p>
        </article>
        <article
          className={
            usePathname() === "/profile"
              ? styles.menuOptionActive
              : styles.menuOption
          }
        >
          <Link href="/profile">
            <Image
              src="/dashboard/menu/icons/user-icon-black.svg"
              alt="User Icon"
              width="24"
              height="24"
            />
            <p>Profile</p>
          </Link>
        </article> */}
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
