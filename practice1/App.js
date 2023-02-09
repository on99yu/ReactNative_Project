import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView, FlatList } from 'react-native';
import {StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourceGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourceGoals((currentCourseGoals) => [...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourceGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem
            text={itemData.item.text}
            onDeleteItem={deleteGoalHandler}
            id={itemData.item.id} />
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />
      </View>
    </View>
    </>
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