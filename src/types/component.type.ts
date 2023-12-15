import { NextPage } from "next";
import { ReactNode } from "react";

export type CustomComponent = NextPage & {

    getLayout?: (page: ReactNode) => JSX.Element;
  };