import dynamic from "next/dynamic"

const ArchiveIcon = dynamic(
    () => import("@/assets/icons/ArchiveIcon")
)

const BookIcon = dynamic(
    () => import("@/assets/icons/BookIcon")
)

const DataIcon = dynamic(
    () => import("@/assets/icons/DataIcon")
)

const FunctionIcon = dynamic(
    () => import("@/assets/icons/FunctionIcon")
)

const SearchIcon = dynamic(
    () => import("@/assets/icons/SearchIcon")
)

const SortIcon = dynamic(
    () => import("@/assets/icons/SortIcon")
)

const TopicIcon = dynamic(
    () => import("@/assets/icons/TopicIcon")
)

const iconList = [
    BookIcon, FunctionIcon, SearchIcon, SortIcon, DataIcon, 
    TopicIcon, ArchiveIcon
]

type Props = {
    chapterNumber: number
}

export default function ChapterIcon({ chapterNumber }: Props) {
    const Icon = iconList[chapterNumber - 1]
    return (
        <Icon/>
    )
}