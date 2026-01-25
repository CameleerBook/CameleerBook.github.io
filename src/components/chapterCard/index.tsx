import { Chapter } from "@/utils/chapters"
import styles from "./index.module.scss"

type Props = {
    chapter: Chapter
}

export default function ChapterCard({ chapter }: Props) {
    return(
        <div className={styles.container}>
            <p>{chapter.name}</p>
        </div>
    )
}