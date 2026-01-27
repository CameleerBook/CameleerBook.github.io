import { Chapter } from "@/utils/chapters"
import styles from "./index.module.scss"
import ChapterIcon from "../chapterIcon"
import { Title6 } from "../text"
import ProofList from "./proofList"

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
            <Title6>{chapter.name}</Title6>
            <div className={styles.proofListContainer}>
                <ProofList list={chapter.proofs} title="Case Studies"/>
                <ProofList list={chapter.exercises} title="Exercises"/>
            </div>
        </div>
    )
}