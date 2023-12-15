"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/singup.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function Singup() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSingupSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const form = e.currentTarget;

      const username = form.elements.namedItem("username") as HTMLInputElement;
      const email = form.elements.namedItem("userEmail") as HTMLInputElement;
      const password = form.elements.namedItem(
        "userPasswordOne"
      ) as HTMLInputElement;
      const repeatedPassword = form.elements.namedItem(
        "userPasswordTwo"
      ) as HTMLInputElement;

      const passwordsMatch = password.value === repeatedPassword.value;

      if (passwordsMatch) {
        const data = {
          username: username.value,
          email: email.value,
          password: password.value,
          dateCreated: Date.now(),
        };

        const response = await axios.post("/api/user/singup", data);

        if (response.statusText !== "OK")
          throw new Error("HTTP error! status: " + response.status);

        toast.success(response.data.message);
        router.push("/verify-email");
      } else {
        toast.error("Passwords do not match!");
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  }

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
            <h2>Create your account</h2>
            <p>Enter following details to register yourself.</p>
          </div>
          <div>
            <form
              onSubmit={handleSingupSubmit}
              id={styles.singupForm}
              name="singupForm"
            >
              <label>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                minLength={3}
                maxLength={30}
                required
              ></input>
              <label>Email</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                minLength={5}
                required
              ></input>
              <label>Password</label>
              <input
                type="password"
                name="userPasswordOne"
                id="userPasswordOne"
                required
              ></input>
              <label>Repeat Password</label>
              <input
                type="password"
                name="userPasswordTwo"
                id="userPasswordTwo"
                required
              ></input>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="userTermsAccepted"
                    id="userTermsAccepted"
                    required
                  />{" "}
                  I am agreeing with <Link href="/">Privacy Policy</Link> and{" "}
                  <Link href="/">Terms & Conditions</Link>.
                </label>
              </div>
              <button type="submit">Register Now</button>
            </form>
            <div id={styles.alreadyMemberDiv}>
              <p>Already a registered?</p>
              <Link href="/login">Login</Link>
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

Singup.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
