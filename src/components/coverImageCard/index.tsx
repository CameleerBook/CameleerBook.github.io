import Cover from "@/assets/cover.png"
import Image from "next/image"
import styles from "./index.module.scss"
import Button from "@/components/button"
import { onClickUrl, TEXTBOOK_LINK } from "@/utils/general"

function CoverImage() {
    const alt = "Title Icon"

    return(
        <Image src={Cover} alt={alt} className={styles.image}/>
    )
}

export default function CoverImageCard() {
    return(
        <div className={styles.container}>
            <CoverImage/>
            <Button
                label={"Read the Textbook"}
                onClick={() => onClickUrl(TEXTBOOK_LINK)}
            />
        </div>
    )
}