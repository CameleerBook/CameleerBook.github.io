import PageWithTitleLayout from "@/components/pageWithTitleLayout";
import { aboutPageParagraphs } from "@/utils/text";
import TitledParagraph from "@/components/text/titledParagraph";
import styles from "./index.module.scss"

export default function About() {
  let i = 0

  return (
    <PageWithTitleLayout title={"About"}>
      <div className={styles.container}>
        {
          aboutPageParagraphs.map(p => 
            <TitledParagraph key={i++} paragraph={p} />
          )
        }
      </div>
    </PageWithTitleLayout>
  );
}
