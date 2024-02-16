import { StubPageNames } from 'src/navigation/types';

export enum RootScreen {
  HomeStack = 'HomeStack',
  World = 'World',
  Movables = 'Movables',
  Realty = 'Realty',
  Finance = 'Finance',
}

export enum HomeScreen {
  Home = 'Home',
  Details = 'Details',
}

export const STUB_PAGES_NAMES: StubPageNames[] = [
  RootScreen.World,
  RootScreen.Movables,
  RootScreen.Realty,
  RootScreen.Finance,
];
