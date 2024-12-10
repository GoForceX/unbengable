import ImageBrowser from "@/components/ImageBrowser";
import { fetchImageList } from "@/actions/metadata";

export default async function BrowsePage() {
  const imageList = await fetchImageList();

  return (
    <div className="flex flex-col grow items-center justify-between">
      <ImageBrowser imageList={imageList} />
    </div>
  );
}
