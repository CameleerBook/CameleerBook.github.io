import { BodyText1Dark, Title1Dark } from "@/components/text"
import styles from "./index.module.scss"
import { prefaceParagraphs } from "@/utils/text"

export default function HomeInfo() {
    let i = 0

    return(
        <div className={styles.container}>
            <Title1Dark>Preface</Title1Dark>
            {
                prefaceParagraphs.map(p => 
                    <BodyText1Dark key={i++}>{p}</BodyText1Dark>
                )
            }
        </div>
    )
}