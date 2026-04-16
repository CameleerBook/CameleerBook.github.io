import { BodyText1Light } from "../text"
import styles from "./index.module.scss"

export default function Footer() {
    return(
        <div className={styles.container}>
            <BodyText1Light>Pedro Gasparinho, Mário Pereira</BodyText1Light>
            <div className={styles.contact}>
                <BodyText1Light>Contacts:</BodyText1Light>
                <BodyText1Light>{"p.gasparinho { at } campus.fct.unl.pt"}</BodyText1Light>
                <BodyText1Light>{"mjp.pereira { at } fct.unl.pt"}</BodyText1Light>
            </div>
            <BodyText1Light>Draft Version: 16 Apr. 2026</BodyText1Light>
        </div>
    )
}