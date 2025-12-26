import { ReactNode } from "react"
import "./index.module.scss"

interface ButtonProps {
    content: ReactNode,
    onClick: () => void,
}

export default function Button(props: ButtonProps) {
    return(
        <div onClick={props.onClick}>
            {props.content}
        </div>
    )
}