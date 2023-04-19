
import { usePreview } from "../../lib/sanity.preview";
import Posts from "./Posts";
import SlideShow from './PostsSlideShow';

export default function PreviewPosts({ query }: { query: string }) {
  const data = usePreview(null, query);

  return (
    <>
      <Posts posts={data} />
      {/* <SlideShow posts={data} /> */}
    </>
  );
}