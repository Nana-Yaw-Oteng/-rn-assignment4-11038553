import { Text,View,StyleSheet,Image,SafeAreaView} from "react-native";

export default function Greetings(){
    return(
        <SafeAreaView>
        <View >
            <Text style={styles.greet}>Jobizz</Text>
        </View>
        <View>
            <Image style={styles.welcome} source={require('../assets/Welcome.png')}></Image>
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    greet: {
        marginTop:50,
        marginBottom:10,
        marginHorizontal:30,
        fontSize:26,
        color:'#356899',
        fontWeight:'600'
    },
    welcome:{
        marginHorizontal:30
    }
})