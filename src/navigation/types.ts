import type { NavigatorScreenParams } from '@react-navigation/native';
import { RootScreen, HomeScreen } from 'src/constants/navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootBottomTabParamList {}
  }
}

type HomeStackType = Record<
  RootScreen.HomeStack,
  NavigatorScreenParams<HomeNativeStackParamList>
>;

export type StubPageNames =
  | RootScreen.World
  | RootScreen.Movables
  | RootScreen.Realty
  | RootScreen.Finance;

type StubPagesType = Record<StubPageNames, undefined>;

export type RootBottomTabParamList = HomeStackType & StubPagesType;

export type HomeNativeStackParamList = {
  [HomeScreen.Home]: undefined;
  [HomeScreen.Details]: DetailsScreenParam;
};

type DetailsScreenParam = {
  id: string;
};
