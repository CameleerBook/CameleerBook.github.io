"use client"

import { ButtonText } from "../text"
import styles from "./index.module.scss"

interface ButtonProps {
    label: string,
    onClick: () => void,
}

export default function Button({label, onClick}: ButtonProps) {
    return(
        <div onClick={onClick} className={styles.container}>
            <ButtonText>{label}</ButtonText>
        </div>
    )
}