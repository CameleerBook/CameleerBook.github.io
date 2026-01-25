"use client"

import { ReactNode } from "react"
import styles from "./index.module.scss"

interface ButtonProps {
    children: ReactNode,
    onClick: () => void,
}

export default function Button({children, onClick}: ButtonProps) {
    return(
        <div onClick={() => onClick} className={styles.container}>
            {children}
        </div>
    )
}