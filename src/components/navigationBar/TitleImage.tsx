import styled from "styled-components"
import ImageViewer from "../imageViewer"
import CamelTitle from "@/assets/cameltitle.png"

export default function TitleImage() {
    return(
        <Container src={CamelTitle} alt="Title Icon"/>
    )
}

const Container = styled(ImageViewer)`
    height: 75px;
    width: 340px;
`