"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/login.module.sass";
import SingupLayout from "@/layouts/singup-layout";
import React, { ReactNode, useState } from "react";
import User from "@/models/user";
import { useGlobalState } from "@/utils/constants";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";
interface CustomJwtPayload extends JwtPayload {
  id: string;
  username: string;
  email: string;
  role: string;
}
export default function Login(request: NextRequest) {
  const router = useRouter();

  const [, setIsLogged] = useGlobalState("isLogged");
  const [, setUserData] = useGlobalState("userData");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const form = e.currentTarget;

      const usernameOrEmail = form.elements.namedItem(
        "usernameOrEmail"
      ) as HTMLInputElement;
      const password = form.elements.namedItem(
        "userPassword"
      ) as HTMLInputElement;

      const data = {
        usernameOrEmail: usernameOrEmail.value,
        password: password.value,
      };

      const response = await axios.post("/api/user/login", data);

      if (response.statusText !== "OK") throw new Error(response.data.message);

      const userData = await response.data.userData;
      console.log(response.data.tokenData.role);
      toast.success(response.data.message);
      const token = request.cookies.get("token")?.value || "";
      const decoded: CustomJwtPayload = jwtDecode(token);
      setUserData(userData);
      setIsLogged(true);
      if (decoded.role === "Admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/Investor/dashboard");
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err);
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
            <h2>Login</h2>
            <p>Enter your credentials</p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              id={styles.singupForm}
              name="loginForm"
            >
              <label>Username/Email</label>
              <input type="text" name="usernameOrEmail" required></input>

              <label>Password</label>
              <input type="password" name="userPassword" required></input>
              <button type="submit">Login</button>
            </form>
            <div id={styles.alreadyMemberDiv}>
              <p>Forgot your password?</p>
              <Link href="/forgot-password">Recover</Link>
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

Login.getLayout = function getLayout(page: ReactNode) {
  return <SingupLayout>{page}</SingupLayout>;
};
