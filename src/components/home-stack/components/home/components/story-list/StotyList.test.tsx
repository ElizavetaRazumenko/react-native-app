import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useStories } from 'src/api/stories/queries';
import { StoryList } from './StoryList';

jest.mock('src/api/stories/queries', () => ({
  useStories: jest.fn(),
}));

describe('StoryList component', () => {
  it('renders loading indicator when data is pending', () => {
    (useStories as jest.Mock).mockReturnValue({
      isPending: true,
      error: null,
      data: null,
    });

    const { getByTestId } = render(<StoryList />);
    const loader = getByTestId('loading-indicator');

    expect(loader).toBeTruthy();
  });

  it('renders error message when there is an error', () => {
    (useStories as jest.Mock).mockReturnValue({
      isPending: false,
      error: { message: 'Test error' },
      data: null,
    });

    const { getByText } = render(<StoryList />);
    const errorMessage = getByText(/An error has occurred/);

    expect(errorMessage).toBeTruthy();
  });

  it('renders stories when data is loaded', async () => {
    const testData = {
      id: 'Test id',
      category: 'Test category',
      date: 'February 28, 2024, 13:05',
      title: 'Test title',
      snippet: 'Test snippet',
      content: 'Test content',
      picturesUrl: ['url1', 'url2', 'url3'],
    };

    (useStories as jest.Mock).mockReturnValue({
      isPending: false,
      error: null,
      data: testData,
    });

    const { getByTestId } = render(<StoryList />);

    await waitFor(() => {
      expect(getByTestId('stories-list')).toBeTruthy();
    });
  });
});
