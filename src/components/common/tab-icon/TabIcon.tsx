import React from 'react';
import { Image } from 'react-native';
import { ICONS } from 'src/constants/icons';

type Props = {
  name: string;
  focused: boolean;
};

export const TabIcon: React.FC<Props> = ({ name, focused }) => (
  <Image
    source={focused ? ICONS[`${name}Active`] : ICONS[name]}
    className={name === 'Movables' ? 'w-auto h-[17px]' : 'w-auto h-5'}
  />
);
