import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { replaceStr } from "../util/replaceStr";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row mx-8">
      <article className="basis-3/4">
        <div className="w-full h-0 pb-[56.26%] relative">
          <iframe
            className="rounded-lg absolute top-0 left-0"
            id="player"
            type="text/html"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={title}
          />
        </div>
        <div className="pt-4">
          <h2 className="text-xl font-bold">{replaceStr(title)}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          {description && 
          <p className="text-sm whitespace-pre-wrap bg-ugray rounded-xl p-4 mb-8">
            {replaceStr(description)}
          </p>}
        </div>
      </article>
      <section className="basis-1/4">
        <RelatedVideos id={channelId} />
      </section>
    </section>
  );
}
