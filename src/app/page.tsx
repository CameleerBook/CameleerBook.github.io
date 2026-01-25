"use client"

import CoverImageCard from "@/components/coverImageCard";
import styles from "./page.module.scss"
import { BodyText1 } from "@/components/text";

export default function HomePage() {
  return(
    <div className={styles.container}>
      <div className={styles.leftItem}>
        <CoverImageCard/>
      </div>
      <div className={styles.rightItem}>
        <BodyText1>
          More than ever we, as a society, rely on software. Some of 
          this software
        </BodyText1>
      </div>
    </div>
  )
}