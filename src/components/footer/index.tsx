import { BodyText1Light } from "../text"
import styles from "./index.module.scss"

export default function Footer() {
    return(
        <div className={styles.container}>
            <BodyText1Light>Pedro Gasparinho, Mário Pereira</BodyText1Light>
            <BodyText1Light>{"Contact: p.gasparinho { at } fct.unl.pt"}</BodyText1Light>
            <BodyText1Light>Draft Version: 27 Jan. 2026</BodyText1Light>
        </div>
    )
}