import { Chapter } from "@/utils/chapters"
import styles from "./index.module.scss"
import ChapterIcon from "../chapterIcon"

type Props = {
    chapter: Chapter
}

export default function ChapterCard({ chapter }: Props) {
    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <ChapterIcon chapterNumber={chapter.number}/>
            </div>
            <p>{chapter.name}</p>
        </div>
    )
}