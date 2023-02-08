import { View, Text, StyleSheet,Pressable } from "react-native"; 

function GoalItem (props) {

    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText} >{props.text}</Text>
            </View>
        </Pressable>
    )
};

const styles= StyleSheet.create({
    goalItem:{
        padding:8,
        margin:8,
        borderRadius:6,
        backgroundColor: "#520acc",
      },
      goalText:{
        color:'white',
      }
})

export default GoalItem;