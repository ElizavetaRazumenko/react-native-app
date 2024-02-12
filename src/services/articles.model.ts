export type ArticleResponseData = {
  results: ArticleApiData[]
}

type ArticleApiData = {
  subsection: string;
  published_date: string;
  title: string;
  abstract: string;
  multimedia: Multimedia[];
}

type Multimedia = {
  url: string;
}

export type ArticleConvertedData = {
  id: string;
  category: string;
  date: string;
  title: string;
  content: string;
  picUrl: string;
};