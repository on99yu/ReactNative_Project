import {Text, View,StyleSheet,SafeAreaView }from 'react-native';
import Title from '../components/Title';

function GameScreen(){
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess */}
            <View>
                <Text style={styles.title}>Higher or lower?</Text>
                {/* + -  */}
            </View>
            {/* <View>Log Rounds</View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:"#ddb52f",
        textAlign:'center',
        padding:12, 
        borderWidth:2,
        borderColor:'#ddb52f',
    }
})

export default GameScreen;