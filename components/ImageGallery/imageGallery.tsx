"use client";

import React, { useEffect, useState } from "react";
import styles from "@/components/ImageGallery/imageGallery.module.css";

interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export default function ImageGallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=100"
        );
        if (!res.ok) throw new Error("Failed");
        const data: ImageData[] = await res.json();
        setImages(data);
      } catch (err: any) {}
    };

    fetchImages();
  }, []);

  return (
    <div className={styles.gallery}>
      {images.map((img) => (
        <div key={img.id} className={styles.card}>
          <img
            src={img.download_url}
            alt={img.author}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
