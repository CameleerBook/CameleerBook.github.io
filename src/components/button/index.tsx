"use client"

import { ButtonText2 } from "../text"
import styles from "./index.module.scss"

interface ButtonProps {
    label: string,
    onClick: () => void,
}

export default function Button({label, onClick}: ButtonProps) {
    return(
        <div onClick={onClick} className={styles.container}>
            <ButtonText2>{label}</ButtonText2>
        </div>
    )
}