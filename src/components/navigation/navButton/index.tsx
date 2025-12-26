"use client"

import { Page } from "@/utils/pages";
import Link from "next/link";
import Title3 from "../../text/title3";
import Color from "@/theme/color";

export default function NavButton(props: { page: Page }) {
    const page = props.page

    return(
        <Link href={page.address}>
            <Title3 color={Color.onPrimary} text={page.name}/>
        </Link>
    )
}