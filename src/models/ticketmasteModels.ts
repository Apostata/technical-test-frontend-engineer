interface ITMPageResp {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

interface ITMExternalLinks {
  [key: string]: [
    {
      url: string;
    }
  ];
}

interface ITMImage {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

interface ITMClassification {
  primary: boolean;
  segment: {
    id: string;
    name: string;
  };
  genre: {
    id: string;
    name: string;
  };
  subGenre: {
    id: string;
    name: string;
  };
  type: {
    id: string;
    name: string;
  };
  subType: {
    id: string;
    name: string;
  };
  family: boolean;
}

interface ITMUpcomginEvents {
  _total: number;
  "mfx-nl": number;
  "mfx-no": number;
  "mfx-es": number;
  ticketmaster: number;
  "mfx-cz": number;
  "mfx-pl": number;
}

interface ITMAtraction {
  name: string;
  type: string;
  id: string;
  test: false;
  url: string;
  locale: string;
  externalLinks: ITMExternalLinks;
  images: ITMImage[];
  classifications: ITMClassification[];
  upcomingEvents: ITMUpcomginEvents;
  _links: {
    self: {
      href: string;
    };
  };
}

interface ITMEmbeddedLinks {
  first: {
    href: string;
  };
  self: {
    href: string;
  };
  next: {
    href: string;
  };
  last: {
    href: string;
  };
}

interface ITMResponseData {
  _embedded: {
    attractions: ITMAtraction[];
  };
  _links: ITMEmbeddedLinks;
  page: ITMPageResp;
}

interface ITMResponse {
  data: ITMResponseData;
}
