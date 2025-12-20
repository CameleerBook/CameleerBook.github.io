"use client"

import { pageList } from "@/utils/pages"
import NavButton from "../navButton"
import TitleImage from "../titleImage"
import styles from "./index.module.scss"

export default function NavigationBar() {
	let i = 0

	return(
		<div className={styles.container}>
			<div className={styles.sideItem}>
				<TitleImage/>
			</div>
			<div className={styles.buttonList}>
				{ pageList.map(p => <NavButton key={i++} page={p} />) }
			</div>
			<div className={styles.sideItem}>
				Light
			</div>
		</div>
	)
}