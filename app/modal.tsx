import { Text, View } from 'react-native'

import { usePreventRemove } from '@react-navigation/native'
import { useRouter } from 'expo-router'

export default function ModalScreen() {
  const router = useRouter()

  usePreventRemove(true, () => {
    console.log('Prevented closing the modal!')
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Modal</Text>
      <Text onPress={() => router.back()}>Close</Text>
    </View>
  )
}
