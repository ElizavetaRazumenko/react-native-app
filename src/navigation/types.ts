import type { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootBottomTabParamList {}
  }
}

export type RootBottomTabParamList = {
  HomeNativeStackScreen: NavigatorScreenParams<HomeNativeStackParamList>;
  World: undefined;
  Movables: undefined;
  Realty: undefined;
  Finance: undefined;
};

export type HomeNativeStackParamList = {
  Home: undefined;
  Details: { articleId: string };
};