import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';
import VideoViewCount from './VideoViewCount';
import { replaceStr } from '../util/replaceStr';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';

  return (
    <li
      className={isList ? 'flex gap-1 xl:ml-6 mb-2' : ''}
      onClick={() => {navigate(`/videos/watch/${video.id}`, { state: { video } });}}
    >
      <img
        className={isList ? 'w-40 mr-2 rounded-xl' : 'w-full rounded-xl'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className={isList ? 'text-sm mb-0.5 line-clamp-2' : 'mt-2 mb-0.5 line-clamp-2'}>{replaceStr(title)}</p>
        <p className={isList ? 'text-xs opacity-60 line-clamp-1' : 'text-sm opacity-60 line-clamp-1'}>{replaceStr(channelTitle)}</p>
        <p className={isList ? 'text-xs opacity-60' : 'text-sm opacity-60'}><VideoViewCount id={video.id}/>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
