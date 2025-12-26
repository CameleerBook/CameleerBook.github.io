import Cover from "@/assets/cover.png"
import Image from "next/image"
import styles from "./index.module.scss"

export default function CoverImage() {
    const alt = "Title Icon"

    return(
        <Image src={Cover} alt={alt} className={styles.container}/>
    )
}