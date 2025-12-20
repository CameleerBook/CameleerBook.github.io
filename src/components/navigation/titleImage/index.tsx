import ImageViewer from "../../imageViewer"
import CamelTitle from "@/assets/cameltitle.png"

export default function TitleImage() {
    return(
        <ImageViewer src={CamelTitle} alt="Title Icon" height={75} width={340}/>
    )
}