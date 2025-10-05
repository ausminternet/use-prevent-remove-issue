import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>App</Text>
      <Link href="/tabs/one" asChild>
        <Text>Go to Tabs</Text>
      </Link>
    </View>
  )
}
