import Image, { StaticImageData } from "next/image"
import { CSSProperties } from "react"

export default function ImageViewer(props: {src: string | StaticImageData, alt: string, height: number, width: number}) {
    
    const s: CSSProperties = {
        pointerEvents: "none",
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none"
    }

    return(
        <Image style={s} src={props.src} alt={props.alt} height={props.height} width={props.width}/>
    )
}