import * as React from 'react';
import '@testing-library/jest-native/';
import { screen, render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from 'src/constants/navigation';
import { HomeStack } from './HomeStack';

test('shows profile screen when View Profile is pressed', () => {
  render(
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>,
  );

  fireEvent.press(screen.getByText(HomeScreen.Details));

  expect(screen.getByText(HomeScreen.Details)).toBeOnTheScreen();
});
