import Typography from "@/theme/typography"
import { CSSProperties } from "react"

const font = Typography.Title3

export default function Title3(props: { color: string, text: string }) {
    const s : CSSProperties = {
        color: props.color,
        fontSize: font.size,
        fontWeight: font.weight,
        fontFamily: font.family
    }

    return(
        <h1 style={s}>{props.text}</h1>
    )
}

/*const Title3 = styled.h1`
    font-size: ${font.size};
    font-family: ${font.family};
    font-weight: ${font.weight};
    color: ${props => props.color ? props.color : Color.onSurface };
`

export default Title3*/