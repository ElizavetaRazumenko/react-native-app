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
    image: {
      data: Imagedata[];
    };
  };
};

export type Imagedata = {
  attributes: {
    url: string;
  };
};

export type StoryItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  snippet: string;
  content: string;
  picturesUrl: string[];
};

export type DetailsResponse = {
  data: StoryApi;
};