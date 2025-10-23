import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';


const UserRegistration = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email === 'random' && password === 'random') {
      console.log('User Registered:', { email, password });
      Alert.alert('Success', 'Registration successful!');
      router.push('/profile_creation');
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <View className='flex justify-center p-5 bg-[#f2f2f2] min-h-screen'>
      <TextInput className="h-10 mb-2.5 bg-white rounded-md px-2.5"
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput className="h-10 mb-2.5 bg-white rounded-md px-2.5"
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
};

export default UserRegistration;
