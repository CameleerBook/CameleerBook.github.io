import CamelTitle from "@/assets/cameltitle.png"
import Image from "next/image"
import styles from "./index.module.scss"

export default function TitleImage() {
    const alt = "Title Icon"

    return(
        <Image src={CamelTitle} alt={alt} className={styles.container}/>
    )
}