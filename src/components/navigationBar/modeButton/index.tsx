import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";
import styles from "./index.module.scss"

export default function ModeButton() {
    const [isDark, setDarkMode] = useState(false)

    const handleSetMode = () => {
        setDarkMode(!isDark)
    }

    return(
        <div className={styles.container} onClick={handleSetMode}>
            {
                isDark ? 
                <MdDarkMode size={28} className={styles.icon}/> : 
                <MdLightMode size={28} className={styles.icon}/>
            }
        </div>
    )
}