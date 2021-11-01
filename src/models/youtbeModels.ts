interface IYoutubeMetaData {
  kind: string;
  etag: string;
}

interface IYoutubeTumbnailItem {
  url: string;
  width: number;
  height: number;
}

interface IYoutubeSnippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IYoutubeTumbnailItem;
    medium: IYoutubeTumbnailItem;
    high: IYoutubeTumbnailItem;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
}
interface IYoutubeItem extends IYoutubeMetaData {
  id: {
    kind: string;
    videoId: string;
    snippet: IYoutubeSnippet;
  };
}

interface IYoutubeResponseData extends IYoutubeMetaData {
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IYoutubeItem[];
}

interface IYoutubeResponse {
  data: IYoutubeResponseData;
}
