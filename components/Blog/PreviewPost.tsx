
import { usePreview } from "../../lib/sanity.preview";
import Post from "./Post";

export default function PreviewPost({ query, queryParams }: { query: string, queryParams: {[key: string]: any} }) {
  const data = usePreview(null, query, queryParams);

  return (
    <>
      <Post post={data} />
    </>
  );
}