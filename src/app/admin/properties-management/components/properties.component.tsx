import styles from "@/styles/pages/investments/components/investment.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function Property(props: any) {
  return (
    <main id={styles.investment}>
      <div
        id={styles.imageAndStatus} /*style={{ backgroundImage: `url(${})` }}*/
      >
        <div className={styles.imageDiv}>11/06/2023</div>
        <div className={styles.imageDiv}>Available</div>
      </div>
      <div id={styles.investmentInformation}>
        <div>
          <h3>{props.data.name}</h3>
        </div>
        <div>
          <div>
            <Image
              src="/investments/icons/location-icon.svg"
              alt="Location Icon"
              height="16"
              width="16"
            />
            <p>{props.data.direction}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Price</p>
            <p>{props.data.tokenPrice.toString()}</p>
          </div>
          <div>
            <p>Token:</p>
            <p>{props.data.numberOfTokens.toString()}</p>
          </div>
        </div>
      </div>
      <Link
        href={{
          pathname: "/admin/view-property",
          query: {
            name: props.data.name,
            direction: props.data.direction,
            amount: props.data.amount.toString(),
            amountInterest: props.data.amountInterest.toString(),
            grossAnnualRent: props.data.grossAnnualRent.toString(),
            netAmountRent: props.data.netAmountRent.toString(),
            interestPayment: props.data.interestPayment.toString(),
            numberOfTokens: props.data.numberOfTokens.toString(),
            tokenPrice: props.data.tokenPrice.toString(),
            minInvestment: props.data.minInvestment.toString(),
            homeInterest: props.data.homeInterest.toString(),
            deadline: props.data.deadline.toString(),

            secMarket: props.data2.secMarket,
            currency: props.data2.currency,
            neighood: props.data2.neighood,
            yoc: props.data2.yoc,
            elevator: props.data2.elevator,
            buildedSurface: props.data2.buildedSurface,
            bedrooms: props.data2.bedrooms,
            bathrooms: props.data2.bathrooms,
            isRented: props.data2.isRented,
            tokenName: props.data2.tokenName,
            description: props.data2.description,
          }, // the data
        }}
      >
        <div id={styles.viewContainer}>
          <h4>View Property</h4>
          <Image
            src="/dashboard/content/icons/arrow-right-main.svg"
            alt="Arrow Icon Pointing Right"
            height="24"
            width="24"
          />
        </div>
      </Link>
    </main>
  );
}
