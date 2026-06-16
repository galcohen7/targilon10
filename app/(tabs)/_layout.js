import { Tabs } from 'expo-router';
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: 'News feed' }} />
      <Tabs.Screen name="create" options={{ tabBarLabel: 'Create article' }} />
    </Tabs>
  );
}