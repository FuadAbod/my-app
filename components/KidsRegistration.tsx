import React from 'react'
import { Text, StyleSheet, TextInput , View, Button,TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import { useState } from 'react';
import input_data_styles from '@/styles/input_data';

type Kid ={
    name: string;
    date_of_birth: string;
    gender: string;
}
const blankKid: Kid = { name: "", date_of_birth: "", gender: "" };

const KidsRegistration = () => {
    const [kids, setKids] = useState<Kid[]>([ { ...blankKid } ]);

    const handleChange = (index: number, key: keyof Kid, value: string) => {
        setKids(
            prev => {const next = [...prev];next[index] = { ...next[index], [key]: value };
            return next;}
        )
    }
    
    const addKid = () => {
    setKids(
        prev => [...prev, {...blankKid}]
    )
    }

    const removeKid = (index:number) => {
        setKids(prev => prev.filter(
            (_,i) =>i !== index
        )
    );
    }

    const onContinue=() =>{

    }

    return (
    <View style={input_data_styles.container}>
        <Text style={input_data_styles.header}>Lets get some info on your kids</Text>
        {
        kids.map((kid, index) => (
        <View key={index} style={{ marginBottom: 16 }}>
          <Text style={input_data_styles.label}>Child {index + 1} — Name</Text>
          <TextInput
            style={input_data_styles.input}
            placeholder="Enter name"
            value={kid.name}
            onChangeText={text => handleChange(index, "name", text)}
          />

          <Text style={input_data_styles.label}>Date of Birth</Text>
          <TextInput
            style={input_data_styles.input}
            placeholder="YYYY-MM-DD"
            value={kid.date_of_birth}
            onChangeText={text => handleChange(index, "date_of_birth", text)}
          />

          <Text style={input_data_styles.label}>Gender</Text>
          <TextInput
            style={input_data_styles.input}
            placeholder="Enter gender"
            value={kid.gender}
            onChangeText={text => handleChange(index, "gender", text)}
          />

          {kids.length > 1 && (
            <TouchableOpacity onPress={() => removeKid(index)} style={{ marginTop: 8 }}>
              <Text style={{ color: "red" }}>Remove child</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <Button title="Add Another Child" onPress={addKid} />
      <Button title="Continue" onPress={onContinue} />
    </View>
  );
};


export default KidsRegistration;