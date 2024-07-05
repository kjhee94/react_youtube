import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import { countFormat } from "../util/countFormat";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: channel } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => {
      return youtube.channelData(id);
    },
    // staleTime: 1000 * 60 * 5,
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  return (
    <div className="flex items-center pt-2 pb-4">
      {channel && (
        <img
          className="w-10 h-10 rounded-full"
          src={channel.snippet.thumbnails.default.url}
          alt={name}
        />
      )}
      <div className="ml-3">
        <p className="text-sx font-normal">{name}</p>
        {channel && <p className="text-sm opacity-60">구독자 {countFormat(channel.statistics.subscriberCount)}명</p>}
      </div>
    </div>
  );
}
