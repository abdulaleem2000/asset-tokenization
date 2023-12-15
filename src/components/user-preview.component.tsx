import Styles from "@/styles/components/user-preview.module.sass"
import Image from "next/image";
export default function UserPreview() {
    return(
        <main id={Styles.userSection}>
            <div className={Styles.topSection}>
                <Image
                    src="/dashboard/menu/icons/user-icon-black.svg"
                    alt="Investment Image"
                    width="35"
                    height="35"
                />
                <h2>User</h2>
                <Image
                    src="/dashboard/menu/icons/options-icon.svg"
                    alt="Options Icon"
                    width="35"
                    height="35"
                />
            </div>

            <div id={Styles.mainSection}>
                <div className={Styles.main}>
                    <h4>Total Users</h4>
                    <h1>400+</h1>
                    <p>Verified Users</p>
                </div>

                <div className={Styles.main}>
                    <h4>Total Users</h4>
                    <h1>30</h1>
                    
                    <p>Unverified Users</p>
                </div>

            </div>
          
        </main>
    );
}