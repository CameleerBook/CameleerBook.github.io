import Chapter from "@/components/chapterCard";
import PageWithTitleLayout from "@/components/pageWithTitleLayout";
import { chapterList } from "@/utils/chapters";

export default function Gallery() {
  let i = 0;

  return (
    <PageWithTitleLayout title="Proof Gallery">
      {
        chapterList.map(c => 
          <Chapter key={i++} chapter={c}/>
        )
      }
    </PageWithTitleLayout>
  );
}
