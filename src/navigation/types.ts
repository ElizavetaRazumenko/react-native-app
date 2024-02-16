import type { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootBottomTabParamList {}
  }
}

type HomeStackType = Record<
  'HomeStack',
  NavigatorScreenParams<HomeNativeStackParamList>
>;

export type StubPageNames = 'World' | 'Movables' | 'Realty' | 'Finance';

type StubPagesType = Record<StubPageNames, undefined>;

export type RootBottomTabParamList = HomeStackType & StubPagesType;

export type HomeNativeStackParamList = {
  Home: undefined;
  Details: { articleId: string; name: string };
};
