import { useAuth } from '@/components/AuthProviders';
import { Redirect, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';


const profile_creation = () => {
    const {user} = useAuth()

    if (!user) {
        return <Redirect href='/(auth)/login' />
    }
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
        <View className='p-5 mt-20'>
            <Text className='text-xl font-semibold mb-5'>Welcome! Lets Create Your Profile</Text>
            <Text className='mb-1.5 font-medium block'>Whats your name?</Text>
            <TextInput
            className='border border-[#ccc] p-2.5 rounded-lg mb-3.5 w-full'
            placeholder="Enter your name"
            value={profile.name}
            onChangeText={text => handleChange('name', text)}
        />

        <Text className="mb-1.5 font-medium block">How old are you?</Text>
        <TextInput
            className='border border-[#ccc] p-2.5 rounded-lg mb-3.5 w-full'
            placeholder="Enter your age"
            keyboardType="numeric"
            value={profile.age}
            onChangeText={text => handleChange('age', text)}
        />

        <Text className="mb-1.5 font-medium block">Whats your occupation?</Text>
        <TextInput
            className='border border-[#ccc] p-2.5 rounded-lg mb-3.5 w-full'
            placeholder="Enter your occupation"
            value={profile.occupation}
            onChangeText={text => handleChange('occupation', text)}
        />

        <Text className="mb-1.5 font-medium block">Tell us about yourself:</Text>
        <TextInput
            className='border border-[#ccc] p-2.5 rounded-lg mb-3.5 w-full'
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
