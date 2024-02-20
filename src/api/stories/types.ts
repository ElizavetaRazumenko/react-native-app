export type StoriesResponse = {
  data: StoryApi[];
};

type StoryApi = {
  id: number;
  attributes: {
    category: string;
    date: string;
    title: string;
    snippet: string;
    content: string;
    image: Imagedata;
  };
};

type Imagedata = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type StoryItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  snippet: string;
  content: string;
  pictureUrl: string;
};

export type DetailsResponse = {
  data: StoryApi;
};
