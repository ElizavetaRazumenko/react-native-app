import { useQuery } from "@tanstack/react-query";
import { ArticleResponseData } from "../services/articles.model";
import { articleService } from "../services/articles.service";
import { convertArticlesData } from "../utils/convert-articles-data";

export const useArts = () =>
    useQuery({
        queryKey: ["articlesData"],
        queryFn: (): Promise<ArticleResponseData> =>
        articleService.getArtsData().then((res) => res.json()),
        select: (data) => convertArticlesData(data)
    })