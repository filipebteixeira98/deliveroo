import { Stack } from 'expo-router';

import Header from '@/components/Header';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header />,
        }}
      />
    </Stack>
  );
}
