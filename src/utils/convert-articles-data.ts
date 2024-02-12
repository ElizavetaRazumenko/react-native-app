import { ArticleConvertedData, ArticleResponseData } from "../services/articles.model";
import { formatDate } from "./format-date";
import { generateID } from './generate-id';

export const convertArticlesData = (data: ArticleResponseData): ArticleConvertedData[] => {
  return data.results.map((result) => ({
    id: generateID(),
    category: result.subsection || "uncategorized",
    date: formatDate(result.published_date),
    title: result.title,
    content: result.abstract,
    picUrl: result.multimedia[0].url
  }))
}