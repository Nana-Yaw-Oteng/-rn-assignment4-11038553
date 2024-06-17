import Icon  from "react-native-vector-icons/FontAwesome5";
import { Text,View,StyleSheet } from "react-native";

export default function Footer(){
    return(
        <View>
        <View style={styles.foot}>
                
        <Text style={styles.bord}> ———―———— Or continue with ―——————— </Text>
        </View>
        <View style={styles.icon}>
        <Icon name="apple" size={30}/>
        <Icon name="google" size={30}/>
        <Icon name="facebook" size={30} color={'blue'}/>
        </View>
        <View style={{marginVertical:40}}>
        <Text style={{color:'#bfbfbf', textAlign:'center',fontSize:14}}>Haven't an account?   
              <Text style={{color:'#356899'}}>
                 Register
                </Text>
                </Text>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    foot:{
        marginVertical:60
    
       },
       bord:{
       color:'#bfbfbf',
       textAlign:'center'
       
       },
       icon:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
        
       }

})