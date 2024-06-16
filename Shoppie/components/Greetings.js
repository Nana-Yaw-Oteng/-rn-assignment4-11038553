import { Text,View,StyleSheet,Image,SafeAreaView} from "react-native";

export default function Greetings(){
    return(
        <SafeAreaView>
        <View >
            <Text style={styles.greet}>Jobizz</Text>
        </View>
        <View style={styles.welcome}>
            <Text style={styles.welcomeContainer} >Welcome Back &#128075;
                
            </Text>
            <Text style={styles.log}> Let's log in. Apply to jobs!</Text>

        </View>
        <View>
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    greet: {
        marginTop:80,
        marginHorizontal:25,
        fontSize:26,
        color:'#356899',
        fontWeight:'600'
    },
    welcome:{
       marginHorizontal:25,
       marginVertical:10
    },
    welcomeContainer:{
        fontSize:24,
       fontFamily:'Poppins',
       fontWeight:'600',
       color:'#00004d'
    },
    log:{
        fontSize:14,
        fontWeight:'400',
        marginTop:10,
        color:'#bfbfbf',
        marginBottom:90
    }
    
})