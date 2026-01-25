import { ReactNode } from "react";
import styles from "./typography.module.scss"

type Props = {
    children: ReactNode
}

export function ButtonText1({children}: Props) {
    return(
        <p className={styles.buttonText1}>{children}</p>
    )
}

export function ButtonText2({children}: Props) {
    return(
        <p className={styles.buttonText2}>{children}</p>
    )
}

export function BodyText1({children}: Props) {
    return(
        <p className={styles.bodyText1}>{children}</p>
    )
}

export function Title1({children}: Props) {
    return(
        <h1 className={styles.title1}>{children}</h1>
    )
}