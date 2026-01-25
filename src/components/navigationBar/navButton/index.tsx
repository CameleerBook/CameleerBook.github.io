"use client"

import { Page } from "@/utils/pages";
import Link from "next/link";
import { Title3 } from "@/components/text";

type Props = {
    page: Page
}

export default function NavButton({ page }: Props) {
    return(
        <Link href={page.address}>
            <Title3>{page.name}</Title3>
        </Link>
    )
}