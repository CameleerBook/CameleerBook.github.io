"use client"

import { ReactNode } from "react"
import styles from "./index.module.scss"

interface ButtonProps {
    content: ReactNode,
    onClick: () => void,
}

export default function Button(props: ButtonProps) {
    return(
        <div onClick={() => props.onClick} className={styles.container}>
            {props.content}
        </div>
    )
}