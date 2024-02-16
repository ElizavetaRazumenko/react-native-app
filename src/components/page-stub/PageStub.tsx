import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PageStub: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className={`
        h-screen
        flex
        items-center
        justify-center
        pt-[${insets.top}px]
        pr-[${insets.right}px]
        pb-[${insets.bottom}px]
        pl-[${insets.left}px]
  `}
    >
      <Text className="text-lg">Stub</Text>
    </View>
  );
};
