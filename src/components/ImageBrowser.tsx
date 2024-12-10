"use client";

import { Pagination } from "@nextui-org/pagination";
import { useEffect, useState } from "react";
import ImageCard from "@/components/ImageCard";

export default function ImageBrowser({ imageList }: { imageList: string[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [columnLimit, setColumnLimit] = useState(4);
  const [rowLimit] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setColumnLimit(4);
      } else if (window.innerWidth >= 1024) {
        setColumnLimit(3);
      } else {
        setColumnLimit(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div></div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {imageList
          .slice(
            (currentPage - 1) * (columnLimit * rowLimit),
            currentPage * (columnLimit * rowLimit),
          )
          .map((item, index) => (
            <ImageCard item={item} key={index} />
          ))}
      </div>
      <Pagination
        isCompact
        initialPage={currentPage}
        total={Math.ceil(imageList.length / (columnLimit * rowLimit))}
        onChange={(curr) => setCurrentPage(curr)}
        className="pt-8"
      />
    </>
  );
}
