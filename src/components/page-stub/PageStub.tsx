import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyledText } from 'src/styles/text';
import { StyledButton } from 'src/styles/buttons';
import { SafeAreaInsets } from '../common/safe-area-insets/SafeAreaInsets';

export const PageStub: React.FC = () => (
  <SafeAreaProvider>
    <SafeAreaInsets>
      <View className="flex items-center justify-center">
        <StyledText variant="bold">Some text</StyledText>
        <StyledText variant="primary">Some text</StyledText>
        <StyledText variant="italic">Some text</StyledText>
        <StyledText variant="secondary">Some text</StyledText>

        <StyledButton variant="pink">Press</StyledButton>
        <StyledButton variant="black">Press</StyledButton>
        <StyledButton variant="transparent">Press</StyledButton>
      </View>
    </SafeAreaInsets>
  </SafeAreaProvider>
);
