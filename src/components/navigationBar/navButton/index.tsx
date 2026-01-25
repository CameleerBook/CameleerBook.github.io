"use client"

import { Page } from "@/utils/pages";
import Link from "next/link";
import { ButtonText1 } from "@/components/text";

type Props = {
    page: Page
}

export default function NavButton({ page }: Props) {
    return(
        <Link href={page.address}>
            <ButtonText1>{page.name}</ButtonText1>
        </Link>
    )
}