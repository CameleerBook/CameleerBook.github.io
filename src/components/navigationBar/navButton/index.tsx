"use client"

import { Page } from "@/utils/pages";
import Link from "next/link";
import { Title3 } from "@/components/text";

export default function NavButton(props: { page: Page }) {
    const page = props.page

    return(
        <Link href={page.address}>
            <Title3>{page.name}</Title3>
        </Link>
    )
}