import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row mx-8">
      <article className="basis-3/4">
        <iframe
          className="rounded-lg"
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className="pt-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <p className="text-sm whitespace-pre-wrap bg-ugray rounded-xl p-4">{description}</p>
        </div>
      </article>
      <section className="basis-1/4">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
