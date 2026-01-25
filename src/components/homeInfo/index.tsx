import { BodyText1, Title1 } from "@/components/text"
import styles from "./index.module.scss"
import { prefaceParagraphs } from "@/utils/text"

export default function HomeInfo() {
    let i = 0

    return(
        <div className={styles.container}>
            <Title1>Preface</Title1>
            {
                prefaceParagraphs.map(p => 
                    <BodyText1 key={i++}>{p}</BodyText1>
                )
            }
        </div>
    )
}