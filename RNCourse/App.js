import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button,ScrollView,FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourceGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourceGoals((currentCourseGoals) => [...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  function deleteGoalHandler(id){
    setCourceGoals(currentCourseGoals=> {
      return currentCourseGoals.filter((goal)=>
        goal.id !== id
      );   
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return <GoalItem 
                    text={itemData.item.text} 
                    onDeleteItem={deleteGoalHandler}
                    id={itemData.item.id}/>
        }} 
        keyExtractor={(item, index )=>{
          return item.id;
        }}
        alwaysBounceVertical={false}/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
})