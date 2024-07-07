import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpCilent = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpCilent.get("search", params);
  }

  async videos(params) {
    return this.httpCilent.get("videos", params);
  }

  async channels(params) {
    return this.httpCilent.get('channels', params);
  }
}
