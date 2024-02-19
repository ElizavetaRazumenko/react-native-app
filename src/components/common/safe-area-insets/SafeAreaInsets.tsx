import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
};

export const SafeAreaInsets: React.FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={`
        container
        h-screen
        pt-[${insets.top}px]
        pr-[${insets.right}px]
        pb-[${insets.bottom}px]
        pl-[${insets.left}px]
      `}
    >
      {children}
    </View>
  );
};
