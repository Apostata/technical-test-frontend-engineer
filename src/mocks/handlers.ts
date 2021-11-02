import { rest, setupWorker } from "msw";
import { youtubeMock } from "../mocks/youtube.mock";
import { tikectMasterMock } from "../mocks/tikcetMaster.mock";

const { TM_API_KEY } = process.env;
const { YOUTUBE_API_KEY } = process.env;

export const handlers = [
  // rest.get(
  //   `https://app.ticketmaster.com/discovery/v2/attractions.json?size=1&keyword=iron maiden&apikey=${TM_API_KEY}`,
  //   (req, resp, ctx) => {
  //     return resp(ctx.json(tikectMasterMock));
  //   }
  // ),
  rest.get(
    "https://app.ticketmaster.com/discovery/v2/attractions.json",
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const size = query.get("size");
      const keyword = query.get("keyword");
      const apikey = query.get("apikey");
      return res(ctx.json(tikectMasterMock));
    }
  ),
  // rest.get(
  //   `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&maxResults=20&q=iron maiden&type=video&key=${YOUTUBE_API_KEY}`,
  //   (req, resp, ctx) => {
  //     return resp(ctx.json(youtubeMock));
  //   }
  // ),
  rest.get("https://www.googleapis.com/youtube/v3/search", (req, res, ctx) => {
    const query = req.url.searchParams;
    const part = query.get("part");
    const videoCategoryId = query.get("videoCategoryId");
    const maxResults = query.get("maxResults");
    const q = query.get("q");
    const type = query.get("type");
    const key = query.get("key");
    return res(ctx.json(youtubeMock));
  }),
];
