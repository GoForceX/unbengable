export interface FileEntry {
  type: "file" | "directory" | "report";
  name?: string;
  contents?: FileEntry[];
  directories?: number;
  files?: number;
}
