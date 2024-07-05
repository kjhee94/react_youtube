import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(
	  {
      queryKey: ["videos", keyword],
      queryFn: () => {
        return youtube.search(keyword);
      },
      // staleTime : 500000,
      cacheTime: Infinity,
      staleTime: Infinity,
    });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>fetch Error</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-8 px-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}