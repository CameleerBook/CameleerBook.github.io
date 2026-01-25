import Chapter from "@/components/chapterCard";
import PageWithTitleLayout from "@/components/pageWithTitleLayout";
import { chapterList } from "@/utils/chapters";
import styles from "./index.module.scss"

export default function Gallery() {
  let i = 0;

  return (
    <PageWithTitleLayout title="Proof Gallery">
      <div className={styles.list}>
        {
          chapterList.map(c => 
            <Chapter key={i++} chapter={c}/>
          )
        }
      </div>
    </PageWithTitleLayout>
  );
}
