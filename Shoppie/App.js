import {  Text, View,Button } from 'react-native';
import { useState } from 'react';
import Greetings from './components/Greetings';
import Forms from './components/Forms';

export default function App() {
const [name,setName] = useState(" ");
const[email,setEmail] = useState(" ");
  return (
    <View>
     <Greetings/>
     <Forms/>
    </View>
  );
}