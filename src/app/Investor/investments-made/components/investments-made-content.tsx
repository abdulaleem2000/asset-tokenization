import styles from "@/styles/pages/verification/components/verification-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Investment from "./investments-made.component";
import CategorySelector from "../../investments/components/category-selector.component";
import Link from "next/link";
import SearchBar from "@/components/search-bar.component";
import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
export default function PaymentContent() {
  //const contractAddress = "0x5Ff135846589d6B492c1928541d0F0bD7FE68f27";
  const contractAddress = "0x1f7CC67Ce6745E6c2cd7811e6169139979Bd37BD";

  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useContractRead(
    contract,
    "getInvestments"
  );
  const address = useAddress();
  console.log(address);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // eslint-disable-next-line react/jsx-key
        <main id={styles.investmentsContent}>
          <ContentHeader />
          <article className={styles.header}>
            <div>
              <h2>Investments</h2>
            </div>
          </article>
          <article id={styles.investmentsContainer}>
            {data.map(
              (dataMap: {
                [x: string]: ReactNode;
                name:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
              }) =>
                // eslint-disable-next-line react/jsx-key
                dataMap.userAddress == address ? (
                  // eslint-disable-next-line react/jsx-key
                  <Investment data={dataMap}></Investment>
                ) : (
                  // eslint-disable-next-line react/jsx-key
                  <p></p>
                )
              // eslint-disable-next-line react/jsx-key
            )}
          </article>
        </main>
      )}
    </div>

    // <main id={styles.investmentsContent}>
    //   <ContentHeader />
    //   <article className={styles.header}>
    //     <div>
    //       <h1>Profit History</h1>
    //       <p>This month profit details</p>
    //     </div>

    //     <Link href="/admin/add-property">
    //       <button>This Month</button>
    //     </Link>
    //   </article>
    //   <article id={styles.investmentsContainer}>
    //     <Investment />
    //     <Investment />
    //     <Investment />
    //     <Investment />
    //   </article>
    // </main>
  );
}
