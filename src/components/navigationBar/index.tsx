"use client"

import { pageList } from "@/utils/pages"
import NavButton from "./navButton"
import TitleImage from "./titleImage"
import styles from "./index.module.scss"
import ModeButton from "./modeButton"
import PhoneOnly from "./utils/phoneOnly"
import PhoneHide from "./utils/phoneHide"

export default function NavigationBar() {
	return(
		<>
			<PhoneOnly>
				<SmallNavBar/>
			</PhoneOnly>
			<PhoneHide>
				<LargeNavBar/>
			</PhoneHide>
		</>
	)
}

function ButtonList() {
	let i = 0

	return (
		<div className={styles.buttonList}>
			{ pageList.map(p => <NavButton key={i++} page={p} />) }
		</div>
	)
}

function LargeNavBar() {
	return (
		<div className={styles.container}>
			<div className={styles.titleItem}>
				<TitleImage/>
			</div>
			<ButtonList/>
			<div className={styles.modeItem}>
				<ModeButton/>
			</div>
		</div>
	)
}

function SmallNavBar() {
	return(
		<div className={styles.container}>
			<div className={styles.titleModeContainer}>
				<div className={styles.titleItem}>
					<TitleImage/>
				</div>
				<div className={styles.modeItem}>
					<ModeButton/>
				</div>	
			</div>
			<ButtonList/>
		</div>
	)
}