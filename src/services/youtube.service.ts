import axios from "axios";
const { YOUTUBE_API_KEY } = process.env;
let youTubeUrl =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10";

export const searchYoutubeVideos = async (
  queryString: string = "",
  maxResults: number = 20
) => {
  try {
    const resp = await axios.get<never, IYoutubeResponse>(
      `${youTubeUrl}&maxResults=${maxResults}&q=${queryString}&type=video&key=${YOUTUBE_API_KEY}`
    );
    return resp.data.items;
  } catch (error) {
    console.log(error);
  }
};
