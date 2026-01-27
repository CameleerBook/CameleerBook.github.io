import { CaseStudy } from "@/utils/chapters"
import { getProofLink } from "@/utils/pages"
import styles from "./index.module.scss"

type Props = {
    list: CaseStudy[],
    title: string,
}

export default function ProofList({ list, title }: Props) {
    let i = 0

    if (list.length === 0)
        return <></>

    return(
        <div className={styles.container}>
            <p>{`${list.length} ${title}`}</p>
            <div className={styles.list}>
                {
                    list.map(e => 
                        <div key={i++}>
                            <a href={getProofLink(e.link)} target="_blank">{e.name}</a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}