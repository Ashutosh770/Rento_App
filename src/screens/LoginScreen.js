import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'Ranto'||username === 'Ashutosh' && password === 'Ranto2025'||password === 'Ashu123@') {
      setError('');
      navigation.navigate('MainApp');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Rento</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#999" // Placeholder text color
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999" // Placeholder text color
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Background color of the container
  },
  logoText: {
    fontSize: 100,
    
    fontWeight: 'bold',
    marginBottom: 100, // Space between logo and username field
    color: '#666', // Text color for logo text
  },
  label: {
    marginBottom: 8,
    color: '#333', // Text color for labels
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    color: '#333', // Text color for input fields
    width: '100%', // Input field takes full width
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});
