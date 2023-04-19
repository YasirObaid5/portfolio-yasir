import { usePreview } from "../../lib/sanity.preview";
import Posts from "./Posts";
import PostsSlideShow from './PostsSlideShow';

export default function PreviewPosts({ query }: { query: string }) {
  const data = usePreview(null, query);

  return (
    <>
      <PostsSlideShow posts={data} />
    </>
  );
}