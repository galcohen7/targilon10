import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Gal's App</Text>
      <Text style={styles.subtitle}>Computer Science Student</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFD700'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'blue' 
  },
  subtitle: {
    fontSize: 16,
    color: '#ef0f0f',
    marginTop: 10
  }
});