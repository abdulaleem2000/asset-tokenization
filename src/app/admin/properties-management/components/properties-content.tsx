import styles from "@/styles/pages/investments/components/investments-content.module.sass";
import ContentHeader from "@/components/content-header.component";
import Image from "next/image";
import Property from "./properties.component";
import CategorySelector from "../../../Investor/investments/components/category-selector.component";
import Link from "next/link";
import { useContractRead, useContract } from "@thirdweb-dev/react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  useState,
} from "react";
export default function InvestmentsContent() {
  //const contractAddress = "0x5Ff135846589d6B492c1928541d0F0bD7FE68f27";
  const contractAddress = "0x1f7CC67Ce6745E6c2cd7811e6169139979Bd37BD";
  const { contract } = useContract(contractAddress);

  const [assetData, setAssetData] = useState({});
  const { data, isLoading, error } = useContractRead(
    contract,
    "getAllAssetDetails"
  );
  // console.log(data[1]);
  if (error) {
    console.error("failed to read contract", error);
  }

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
              <h2>Properties</h2>
            </div>
            <Link href="/admin/add-property">
              <button>Add Property</button>
            </Link>
          </article>
          <article id={styles.investmentsContainer}>
            {data[0].map(
              (data: {
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
              }) => (
                // eslint-disable-next-line react/jsx-key
                <Property data={data}></Property>
              )
            )}
          </article>
        </main>
      )}
    </div>
  );
}

// <div>
//       {isLoading ? (
//         <main id={styles.investmentsContent}>
//           <ContentHeader />
//           <article className={styles.header}>
//             <div>
//               <h2>Properties</h2>
//             </div>
//             <Link href="/admin/add-property">
//               <button>Add Property</button>
//             </Link>
//           </article>
//           <article id={styles.investmentsContainer}>
//             <Property />
//             <Property />
//             <Property />
//             <Property />
//             <Property />
//             <Property />
//             <Property />
//           </article>
//         </main>
