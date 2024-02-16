import React from 'react';
import { Image } from 'react-native';

type Props = {
  name: string;
  focused: boolean;
};

export const TabIcon: React.FC<Props> = ({ name, focused }) => {
  switch (name) {
    case 'HomeStack':
      return focused ? (
        <Image
          source={require('../../../assets/icons/HomeStack-active.png')}
          className="w-auto h-5"
        />
      ) : (
        <Image
          source={require('../../../assets/icons/HomeStack.png')}
          className="w-auto h-5"
        />
      );

    case 'World':
      return focused ? (
        <Image
          source={require('../../../assets/icons/World-active.png')}
          className="w-auto h-5"
        />
      ) : (
        <Image
          source={require('../../../assets/icons/World.png')}
          className="w-auto h-5"
        />
      );

    case 'Movables':
      return focused ? (
        <Image
          source={require('../../../assets/icons/Movables-active.png')}
          className="w-auto h-[17px]"
        />
      ) : (
        <Image
          source={require('../../../assets/icons/Movables.png')}
          className="w-auto h-[17px]"
        />
      );

    case 'Realty':
      return focused ? (
        <Image
          source={require('../../../assets/icons/Realty-active.png')}
          className="w-auto h-5"
        />
      ) : (
        <Image
          source={require('../../../assets/icons/Realty.png')}
          className="w-auto h-5"
        />
      );

    case 'Finance':
      if (focused) {
        return (
          <Image
            source={require('../../../assets/icons/Finance-active.png')}
            className="w-auto h-5"
          />
        );
      }
      return (
        <Image
          source={require('../../../assets/icons/Finance.png')}
          className="w-auto h-5"
        />
      );
  }
};
