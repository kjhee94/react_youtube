export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelData(id) {
    return this.apiClient
      .channels({ params: { part: "snippet,statistics", id } })
      .then((res) => res.data.items[0]);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          type: "video",
          regionCode: "kr",
          maxResults: 20,
          order: "date",
          videoDuration: "medium",
          channelId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async viewCount(id) {
    return this.apiClient
    .videos({ params: { part: "statistics", id } })
    .then((res) => res.data.items[0].statistics.viewCount);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          type: "video",
          regionCode: "kr",
          maxResults: 30,
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "kr",
          maxResults: 30,
          order: "date",
        },
      })
      .then((res) => res.data.items);
  }
}
