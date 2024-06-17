import React, { useState } from 'react';
import { View } from 'react-native';
import Forms from './Forms';
import { useNavigation } from '@react-navigation/native';
import Greetings from './Greetings';


export default function HomeScreen() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Content', { name, email });
  };

  return (
    <View>
        <Greetings/>
      <Forms
        name={setName}
        setName={setName}
        email={email}
        setEmail={setEmail}
        onLogin={handleLogin}
      />
      
    </View>
  );
}
