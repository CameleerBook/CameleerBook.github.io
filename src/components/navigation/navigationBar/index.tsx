"use client"

import { pageList } from "@/utils/pages"
import NavButton from "../navButton"
import TitleImage from "../titleImage"
import styles from "./index.module.scss"

export default function NavigationBar() {
	let i = 0

	return(
		<div className={styles.container}>
			<TitleImage/>
			<div>
				{ pageList.map(p => <NavButton key={i++} page={p} />) }
			</div>
		</div>
	)
}

/*const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 150px;
	background-image:
		linear-gradient(to Right, ${Color.primaryLight}, ${Color.primaryDark});
	padding-left: 20px;
	padding-right: 20px;
	justify-content: space-between;
`

const ButtonsContainer = styled.div`
	height: 100%;
	width: 250px;
	justify-content: center;
	display: flex;
	flex-direction: row;
	align-items: center;
`
*/