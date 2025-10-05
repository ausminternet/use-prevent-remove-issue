import { Stack } from 'expo-router'

export default function TabOneLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Tab One',
        }}
      />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
