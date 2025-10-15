import { Text } from '@react-navigation/elements'
import React, { useState } from 'react'
import { TextInput, View, Button } from 'react-native'
import { useRouter } from 'expo-router';
import input_data_styles from '@/styles/input_data';


const profile_creation = () => {
    const router = useRouter();
    const [profile,setProfile] = useState({
        name:'',
        age:'',
        occupation:'',
        bio:'',
    })

    const handleChange = (key: any, value: any) => {
    setProfile((prev: any) => ({ ...prev, [key]: value }));
        };

    const onSubmit = () => {
        router.push('/kids_profile');
    }
    return (
        <View style={input_data_styles.container}>
        <Text style={input_data_styles.header}>Welcome! Lets Create Your Profile</Text>

        <Text style={input_data_styles.label}>Whats your name?</Text>
        <TextInput
            style={input_data_styles.input}
            placeholder="Enter your name"
            value={profile.name}
            onChangeText={text => handleChange('name', text)}
        />

        <Text style={input_data_styles.label}>How old are you?</Text>
        <TextInput
            style={input_data_styles.input}
            placeholder="Enter your age"
            keyboardType="numeric"
            value={profile.age}
            onChangeText={text => handleChange('age', text)}
        />

        <Text style={input_data_styles.label}>Whats your occupation?</Text>
        <TextInput
            style={input_data_styles.input}
            placeholder="Enter your occupation"
            value={profile.occupation}
            onChangeText={text => handleChange('occupation', text)}
        />

        <Text style={input_data_styles.label}>Tell us about yourself:</Text>
        <TextInput
            style={[input_data_styles.input, input_data_styles.multiline]}
            placeholder="Write a short bio"
            value={profile.bio}
            onChangeText={text => handleChange('bio', text)}
            multiline
            numberOfLines={4}
        />

        <Button title="Submit" onPress={onSubmit} />
        </View>
    );
    };


export default profile_creation;
