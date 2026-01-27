import { BodyText1, Title2 } from "@/components/text";
import styles from "./index.module.scss"
import { Paragraph } from "@/utils/text";

type Props = {
    paragraph: Paragraph
}

export default function TitledParagraph({ paragraph }: Props) {
  let i = 0;

  return(
    <div className={styles.container}>
      <Title2>{paragraph.title}</Title2>
      {
        paragraph.paragraphs.map(p =>
          <BodyText1 key={i++}>{p}</BodyText1>
        )
      }
    </div>
  )
}