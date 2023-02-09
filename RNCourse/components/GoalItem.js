import { View, Text, StyleSheet,Pressable } from "react-native"; 

function GoalItem (props) {

    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color:'#210644'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed})=>pressed && styles.pressdItem}>
                    <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
        </View>
    )
};

const styles= StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor: "#520acc",
      },
      pressedItem:{
        opacity: 0.5
      },
      goalText:{
        color:'white',
        padding:8,
      }
})

export default GoalItem;