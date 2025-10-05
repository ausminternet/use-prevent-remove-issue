import { Button, Text, View } from 'react-native'

import { Link } from 'expo-router'

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tab One</Text>

      <Link href="/tabs/one/modal" asChild>
        <Button title="Open nested modal" />
      </Link>
      <Link href="/modal" asChild>
        <Button title="Open root modal" />
      </Link>
    </View>
  )
}
