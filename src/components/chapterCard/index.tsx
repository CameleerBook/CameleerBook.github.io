import { Chapter } from "@/utils/chapters"
import styles from "./index.module.scss"
import ChapterIcon from "../chapterIcon"
import { getProofLink } from "@/utils/pages"

type Props = {
    chapter: Chapter
}

export default function ChapterCard({ chapter }: Props) {
    let i = 0

    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <ChapterIcon chapterNumber={chapter.number}/>
            </div>
            <p>{chapter.name}</p>
            <p>Case Studies</p>
            <div>
                <ul>
                    {
                        chapter.proofs.map(p => 
                            <li key={i++}>
                                <a href={getProofLink(p.link)} target="_blank">{p.name}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}