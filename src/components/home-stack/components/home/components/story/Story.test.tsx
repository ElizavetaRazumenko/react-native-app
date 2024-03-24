import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreen, RootScreen } from 'src/constants/navigation';
import { Story } from './Story';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

const mockData = {
  id: 'mockId',
  category: 'Mock Category',
  date: 'February 28, 2024, 13:05',
  title: 'Mock Title',
  snippet: 'Mock Snippet',
  picturesUrl: ['url1', 'url2', 'url3'],
  content: 'Test Content',
};

describe('Story component', () => {
  it('renders story with correct data', () => {
    const { getByText } = render(<Story data={mockData} />);

    expect(getByText(mockData.category)).toBeTruthy();
    expect(getByText(mockData.date)).toBeTruthy();
    expect(getByText(mockData.title)).toBeTruthy();
    expect(getByText(mockData.snippet)).toBeTruthy();
  });

  it('navigates to details screen when pressed',  () => {
    const { getByTestId } = render(<Story data={mockData} />);

    fireEvent.press(getByTestId('story-touchable'));

    expect(useNavigation().navigate).toHaveBeenCalledWith(
      RootScreen.HomeStack,
      {
        screen: HomeScreen.Details,
        params: { id: mockData.id },
      },
    );
  });
});
