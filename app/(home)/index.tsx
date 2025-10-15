import { View, StyleSheet } from 'react-native';
import UserRegistration from '@/components/UserRegistration';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <UserRegistration />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
