import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';

export default function TabLayout() {

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="one">
         <Label>One</Label>
         <Icon sf={{ default: 'house.fill', selected: 'house.fill' }} />
       </NativeTabs.Trigger>
      <NativeTabs.Trigger name="two">
         <Label>Two</Label>
         <Icon sf={{ default: 'house.fill', selected: 'house.fill' }} />
       </NativeTabs.Trigger>
    </NativeTabs>
  )
}
