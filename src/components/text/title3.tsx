import Color from "@/theme/color"
import Typography from "@/theme/typography"
import styled from "styled-components"

const font = Typography.Title3

const Title3 = styled.h1`
    font-size: ${font.size};
    font-family: ${font.family};
    font-weight: ${font.weight};
    color: ${props => props.color ? props.color : Color.onSurface };
`

export default Title3