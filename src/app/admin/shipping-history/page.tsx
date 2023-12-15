'use client'
import { useEffect, useState } from 'react'
import Menu from '../../../components/menu_admin.component'
import axios from 'axios';
import ShippingContent from "./components/shipping-content";
import styles from '@/styles/pages/verification/verifications.module.sass'
export default function Verification () {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function getData() {
          const response = await axios.get("/api/data/dashboard");
    
          return response.data;
        }
    
        getData().then((dataResponse) => {
          setUserData(dataResponse.user);
        });
      }, []);


    return (
        <main id={styles.verificationsView}>
            <Menu userData = {userData}/>
            <ShippingContent/>
            
        </main>
       
    )
}