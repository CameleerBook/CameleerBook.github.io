import { Chapter } from "@/utils/chapters"

type Props = {
    chapter: Chapter
}

export default function ChapterCard({ chapter }: Props) {
    return(
        <div>
            <p>{chapter.name}</p>
        </div>
    )
}