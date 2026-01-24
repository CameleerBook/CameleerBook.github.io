"use client"

import CoverImage from "@/components/coverImage";
import styles from "./page.module.scss"
import Button from "@/components/button";

function ButtonContent() {
  return(
    <div className={styles.button}>
      <p>Read the PDF</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div>
          <p>Learn Verification With Cameleer</p>
          <p>Takes on the ambitious challenge of teaching automated deductive 
              verification using fully automated tools. In this book, we prove
              several OCaml implementations of classical algorithms and data
              structures using the Cameleer tool.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <CoverImage/>
          <Button content={<ButtonContent/>} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
