import { ImageSourcePropType } from "react-native";

export type ArticleData = {
    id: string;
    category: string;
    date: string;
    title: string;
    content: string;
    pictureUrl: ImageSourcePropType;
  };