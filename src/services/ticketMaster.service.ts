import axios from "axios";
const { TM_API_KEY } = process.env;
let ticketMasterUrl =
  "https://app.ticketmaster.com/discovery/v2/attractions.json";

export const searchTmArtist = async (queryString: string) => {
  try {
    const resp = await axios.get<never, ITMResponse>(
      `${ticketMasterUrl}?size=1&keyword=${queryString}&apikey=${TM_API_KEY}`
    );
    const attraction = resp.data ? resp.data._embedded.attractions[0] : {};
    return attraction;
  } catch (error) {
    console.log(error);
  }
};
