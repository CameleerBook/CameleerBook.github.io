"use client"

import styled from "styled-components";
import { Page } from "@/utils/pages";
import Link from "next/link";
import Title3 from "../text/title3";
import Color from "@/theme/color";

const Container = styled(Link)`
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: #ed853b;
    }
`

export default function NavButton(props: { page: Page }) {
    const page = props.page

    return(
        <Container href={page.address}>
            <Title3 color={Color.onPrimary}>{page.name}</Title3>
        </Container>
    )
}