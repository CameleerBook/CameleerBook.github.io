import Cover from "@/assets/cover.png"
import Image from "next/image"
import styles from "./index.module.scss"
import Button from "@/components/button"

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
            <Button onClick={() => {}}>
                <p>Read the Textbook</p>
            </Button>
        </div>
    )
}