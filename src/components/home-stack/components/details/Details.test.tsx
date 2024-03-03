import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useDetails } from 'src/api/stories/queries';
import { Details, Props } from './Details';

jest.mock('src/api/stories/queries', () => ({
  useDetails: jest.fn(),
}));

const mockProps = {
  navigation: {},
  route: {
    params: {
      id: '1',
    },
  },
};

describe('Details component', () => {
  it('renders loading indicator when data is pending', () => {
    (useDetails as jest.Mock).mockReturnValue({
      isPending: true,
      error: null,
      data: null,
    });

    const { getByTestId } = render(<Details {...(mockProps as Props)} />);
    const loader = getByTestId('loading-indicator');

    expect(loader).toBeTruthy();
  });

  it('renders error message when there is an error', () => {
    (useDetails as jest.Mock).mockReturnValue({
      isPending: false,
      error: { message: 'Test error' },
      data: null,
    });

    const { getByText } = render(<Details {...(mockProps as Props)} />);
    const errorMessage = getByText(/An error has occurred/);

    expect(errorMessage).toBeTruthy();
  });

  it('renders details content when data is loaded', async () => {
    const testData = {
      category: 'Test category',
      date: 'February 28, 2024, 13:05',
      picturesUrl: ['url1', 'url2', 'url3'],
      title: 'Test title',
      content: 'Test content',
    };

    (useDetails as jest.Mock).mockReturnValue({
      isPending: false,
      error: null,
      data: testData,
    });

    const { getByText } = render(<Details {...(mockProps as Props)} />);

    await waitFor(() => {
      expect(getByText(testData.category)).toBeTruthy();
      expect(getByText(testData.content)).toBeTruthy();
    });
  });

  it('renders "No results" message when there is no data', async () => {
    (useDetails as jest.Mock).mockReturnValue({
      isPending: false,
      error: null,
      data: null,
    });

    const { getByText } = render(<Details {...(mockProps as Props)} />);

    await waitFor(() => {
      expect(getByText(/No results were found/)).toBeTruthy();
    });
  });
});
