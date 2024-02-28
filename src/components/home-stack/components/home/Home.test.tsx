import React from 'react';
import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './Home';

describe('Home component', () => {
  it('renders Home component correctly', () => {
    const queryClient = new QueryClient();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
    );

    expect(getByTestId('story-view')).toBeDefined();
  });
});
