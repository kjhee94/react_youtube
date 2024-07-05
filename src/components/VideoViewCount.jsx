import React from 'react';
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import { countFormat } from "../util/countFormat";

export default function VideoViewCount({id}) {
    const { youtube } = useYoutubeApi();
    const { data: viewCount } = useQuery({
      queryKey: ["viewCount", id],
      queryFn: () => {
        return youtube.viewCount(id);
      },
      // staleTime : 500000,
      cacheTime: Infinity,
      staleTime: Infinity, 
    });

    return (<>
        {viewCount && <span>조회수 {countFormat(viewCount)}회 • </span>}
    </>);
}

