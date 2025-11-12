import KidsRegistration from '@/components/KidsRegistration';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


const styles = StyleSheet.create({

   input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  optionButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionButtonPressed: {
    opacity: 0.7,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  optionTextActive: {
    color: '#cc33ff',
    fontWeight: '600',
  },
  section: { 
    marginTop: 20 
  },
  test_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
},
text: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  }
});


const CurrentlyPlaning = () => {
  return (
  <View>
    <Text> Conent to support planning</Text>
  </View>)
};

const DueDate = () =>{
  const router = useRouter();
  const [dueDate,setdueDate]=useState('');

  const goToLandingTabs = () => {
      router.push('/(tabs)');
    
  };
  return(
  <View>
    <Text>When is the due date?</Text>
    <TextInput
      style={styles.input}
      placeholder='YYYY/MM/DD'
      onChangeText={setdueDate}>
    </TextInput>
    <Button title='Continue' onPress={goToLandingTabs}/>
  </View>
  )
}


const KidsProfile = () => {
  const [status, setStatus] = useState('planning');

  const options = [
    { label: 'Planning', value: 'planning' },
    { label: 'Expecting', value: 'expecting' },
    { label: 'Have kids', value: 'have_kids' },
  ];

  return (
    <View style={styles.test_container}>
      <Text style={styles.text}>Select your status:</Text>
      
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Pressable
            key={option.value}
            style={({ pressed }) => [
              styles.optionButton,
              status === option.value && styles.optionButtonActive,
              pressed && styles.optionButtonPressed,
            ]}
            onPress={() => setStatus(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                status === option.value && styles.optionTextActive,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        ))}
      </View>
      
      {status === 'have_kids' && (
        <View style={styles.section}>
          <KidsRegistration />
        </View>
      )}

      {status ==='expecting' &&(
        <View style={styles.section}>
          <DueDate />
        </View>)
      }

      {status==='planning' && (
        <View style={styles.section}>
          <CurrentlyPlaning />
        </View> 
      )}
    </View>
  );
};


export default KidsProfile;