import { TextInput,TouchableOpacity,Text,View,StyleSheet} from "react-native";

export default function({name,setName,email,setEmail,onLogin}){
    return(
        <View>
            <TextInput style={styles.ifield}
             placeholder="Name"
             autoCapitalize='words'
             autoCorrect={false}
             value = {name}
             onChangeText = {setName}
        >

        </TextInput>
            <View>
                <TextInput style={styles.ifield}
                 placeholder="Email"
                 keyboardType='email-address'
                 autoComplete='email'
                 autoCorrect={false}
                 autoCapitalize={false}
                 value={email}
                 onChangeText={setEmail}
                 >

                 </TextInput>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={onLogin}>
                    <Text style={styles.log}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
    
        
    );
}
const styles = StyleSheet.create({
   ifield:{
    borderWidth:1.,
    borderColor:'#bfbfbf',
    width:327,
    height:52,
    borderRadius:10,
    marginHorizontal:25,
    padding:15,
    marginBottom:20
   } ,
   button:{
    backgroundColor:'#356899',
    width:327,
    height:56,
    marginHorizontal:25,
    borderRadius:10,
    
   },
   log:{
    textAlign:'center',
    fontSize:20,
    padding:13,
    color:'#fff'
   }
})