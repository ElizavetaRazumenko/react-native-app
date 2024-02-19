export type ArticleResponse = {
  results: ArticleApi[];
};

type ArticleApi = {
  subsection: string;
  published_date: string;
  title: string;
  abstract: string;
  multimedia: Multimedia[];
};

type Multimedia = {
  url: string;
};

export type ArticleItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  content: string;
  pictureUrl: string;
};

export type DetailsResponse = {
  response: {
    docs: DetailsApi[];
  };
};

type DetailsApi = {
  abstract: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
};

export type DetailsItem = {
  title: string;
  snippet: string;
  content: string;
  source: string;
};
