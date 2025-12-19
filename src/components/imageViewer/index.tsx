import styled from "styled-components"
import Image from "next/image"

const ImageViewer = styled(Image)`
    pointer-events: none;
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

export default ImageViewer