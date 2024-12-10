import { FileEntry } from "@/types/FileList";

export async function fetchImageCount(): Promise<number> {
  const resp = await fetch("https://vv.cdn.goforcex.top/files.json");
  const data = await resp.json();
  return data[0]["contents"][0]["contents"].length;
}

function hashCode(src: string): number {
  let hash = 0,
    i,
    chr;
  if (src.length === 0) return hash;
  for (i = 0; i < src.length; i++) {
    chr = src.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export async function fetchImageList(): Promise<string[]> {
  const resp = await fetch("https://vv.cdn.goforcex.top/files.json");
  const data: FileEntry[] = await resp.json();
  return (
    data[0].contents?.filter((e: FileEntry) => e.name === "webp")[0].contents ??
    []
  )
    .map((e: FileEntry) => e.name!)
    .sort((a, b): number => hashCode(a) - hashCode(b));
}
