import { ReactNode } from "react";
import { Title1 } from "@/components/text";
import styles from "./index.module.scss"

type Props = {
    title: string;
    children: ReactNode;
}

export default function PageWithTitleLayout({ title, children }: Props) {
    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <Title1>{title}</Title1>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    )
}