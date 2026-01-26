import dynamic from "next/dynamic"
import styles from "./index.module.scss"

const IntroductionIcon = dynamic(
    () => import("react-icons/md").then(mod => mod.MdOutlineWavingHand)
)

const ArithmeticIcon = dynamic(
    () => import("react-icons/md").then(mod => mod.MdOutlineCalculate)
)

const SearchIcon = dynamic(
    () => import("react-icons/md").then(mod => mod.MdOutlineSearch)
)

const SortIcon = dynamic(
    () => import("react-icons/md").then(mod => mod.MdOutlineSort)
)

const DataIcon = dynamic(
    () => import("react-icons/md").then(mod => mod.MdOutlineDataArray)
)

const TopicIcon = dynamic(
    () => import("react-icons/md").then(mod => mod.MdOutlineInterests)
)

const ArchiveIcon = dynamic(
    () => import("react-icons/md").then(mod => mod.MdOutlineArchive)
)

const iconList = [
    IntroductionIcon, ArithmeticIcon, SearchIcon, SortIcon, DataIcon, 
    TopicIcon, ArchiveIcon
]

type Props = {
    chapterNumber: number
}

export default function ChapterIcon({ chapterNumber }: Props) {
    const Icon = iconList[chapterNumber - 1]
    return (
        <Icon size={40} className={styles.icon}/>
    )
}