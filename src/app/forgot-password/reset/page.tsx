"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/login.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import React, { ReactNode, useEffect, useState } from "react";
import User from "@/models/user";
import { useGlobalState } from "@/utils/constants";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function ResetPassword() {
  const router = useRouter();
  const pathname = usePathname();

  const [resetToken, setResetToken] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const form = e.currentTarget;

      const newPassword = form.elements.namedItem(
        "newPassword"
      ) as HTMLInputElement;
      const repeatedNewPassword = form.elements.namedItem(
        "repeatedNewPassword"
      ) as HTMLInputElement;

      const passwordsMatch = newPassword.value === repeatedNewPassword.value;

      if (!resetToken || resetToken === "") {
        throw new Error(
          "Token not provided for resetting password. Ask again!"
        );
      } else if (!passwordsMatch) {
        throw new Error("Passwords do not match");
      }

      const data = {
        token: resetToken,
        newPassword: newPassword.value,
      };

      const response = await axios.post("/api/user/reset-password", data);

      if (response.statusText !== "OK") throw new Error(response.data.message);

      toast.success(response.data.message);
      router.push("/login");
    } catch (err: any) {
      console.log(err.response.data);
      toast.error(err.response.data.message);
    }
  }

  useEffect(() => {
    const [, token] = window.location.search.split("=");

    if (!token) {
      toast.error("Token not provided for resetting password. Ask again!");
    }

    setResetToken(token);
  }, []);

  return (
    <main id={styles.signUpView}>
      <section id={styles.formSection}>
        <Toaster />
        <div id={styles.logoPart}>
          <Link href="/" id={styles.logoAnchor}>
            <Image src="/black-vector.svg" alt="Logo" width="31" height="31" />
            <p>TOKEN</p>
          </Link>
        </div>
        <div id={styles.formPart}>
          <div>
            <h2>Reset Password</h2>
            <p>Enter your new password</p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              id={styles.singupForm}
              name="resetPasswordForm"
            >
              <label>New Password</label>
              <input type="password" name="newPassword" required />

              <label>Repeat New Password</label>
              <input type="password" name="repeatedNewPassword" required />
              <button type="submit">Reset Password</button>
            </form>
            <div id={styles.alreadyMemberDiv}>
              <p>Have no account?</p>
              <Link href="/singup">Create Account</Link>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.imageSection}>
        <Image src="/login.jpg" alt="Art Image" width="600" height="800" />
      </section>
    </main>
  );
}

ResetPassword.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
