import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Box,
  Button,
  Center,
  Input,
  Progress,
  Spinner,
  Image,
} from 'native-base';
import { SafeAreaInsets } from '../common/safe-area-insets/SafeAreaInsets';

export const PageStub: React.FC = () => (
  <SafeAreaProvider>
    <SafeAreaInsets>
      <View className="flex items-center justify-center h-max">
        <Box>Stub</Box>
        <Button size="xs" mb="2.5" mt="1.5">
          Click Me
        </Button>
        <Button size="lg" colorScheme="secondary">
          Click Me
        </Button>
        <Button isLoading isLoadingText="Submitting" mb="2.5" mt="1.5">
          Button
        </Button>
        <Input variant="filled" placeholder="Filled" mx="4" />
        <Input variant="unstyled" placeholder="Unstyled" mx="4" />
        <Input variant="rounded" placeholder="Round" mx="4" />
        <Spinner accessibilityLabel="Loading posts" my="5" />
        <Center w="100%">
          <Box w="90%" maxW="400">
            <Progress value={45} mx="4" />
          </Box>
        </Center>
        <Center>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Alternate Text"
            size="xl"
            my="5"
          />
        </Center>
      </View>
    </SafeAreaInsets>
  </SafeAreaProvider>
);
