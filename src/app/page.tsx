"use client"

import styles from "./page.module.scss"
import CoverImageCard from "@/components/coverImageCard";
import HomeInfo from "@/components/homeInfo";

export default function HomePage() {
  return(
    <div className={styles.container}>
      <div className={styles.leftItem}>
        <CoverImageCard/>
      </div>
      <div className={styles.rightItem}>
        <HomeInfo/>
      </div>
    </div>
  )
}