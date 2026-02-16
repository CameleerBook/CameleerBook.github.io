import { BodyText1Alt } from "../text"
import styles from "./index.module.scss"

export default function Footer() {
    return(
        <div className={styles.container}>
            <BodyText1Alt>Pedro Gasparinho, Mário Pereira</BodyText1Alt>
            <BodyText1Alt>{"Contact: p.gasparinho { at } fct.unl.pt"}</BodyText1Alt>
            <BodyText1Alt>Draft Version: 27 Jan. 2026</BodyText1Alt>
        </div>
    )
}