"use client";

import React from "react";

type YouTubeEmbedProps = {
  videoId: string;
  height?: string;
};

export default function YouTubeEmbed({
  videoId,
  height = "600",
}: YouTubeEmbedProps) {
  return (
    <iframe
      width="100%"
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    //   style={{ borderRadius: "12px", maxWidth: "900px" }}
    />
  );
}
