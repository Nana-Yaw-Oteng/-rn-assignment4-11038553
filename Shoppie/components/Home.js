import React from 'react';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { View, Text, SafeAreaView,StyleSheet,Image,TextInput} from 'react-native';

export default function Home({ route }) {
  const { name, email } = route.params;

  return (
    <SafeAreaView>
      
    <View style={styles.container}>
      <Text style={styles.names}>{name}</Text>
      <Text style={styles.mail}>{email} </Text>
      <View style={styles.image}>
        <Image  source={require('../assets/Ellipse.png')}/>
        <View>
        <Text style={styles.dot}>.</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TextInput placeholder='Search a job or position' style={styles.jobsearch}></TextInput>
        <View style={styles.searchIcon}>
        <Icon name='search' color={'#bfbfbf'} size={20}/>
        <View style= {styles.slider}>
        <Icon name="sliders" size={30} color={'#bfbfbf'}/>
        </View>
        </View>
        
          
        
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  container: {
  
    marginHorizontal:20,
    marginVertical:30
    
  },
  image:{
    display:'flex',
    alignSelf:'flex-end',
    marginTop:-50
  },
  dot:{
    fontWeight:'bold', 
    fontSize:30,
    color:'red',
    marginTop:-75,
    marginLeft:38
  },
  names:{
    fontSize:20,
    fontWeight:'bold'
  },
  mail:{
    color:'#bfbfbf',
    fontSize:16
  },
  jobsearch:{
    width:263,
    height:48,
    backgroundColor:'#e6e6e6',
    borderRadius:15,
    paddingLeft:40,
    marginVertical:20
  },
  searchIcon:{
    top:-55,
    left:15
  },
  slider:{
    display:'flex',
    alignSelf:'flex-end',
    marginHorizontal:30,
    backgroundColor:'#e6e6e6',
    borderRadius:15,
    top:-33,
    padding:10
  },
  iconContainer:{
    marginVertical:10
  }
});
