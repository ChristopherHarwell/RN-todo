import React, {SetStateAction, useState} from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import {v4 as uuidv4} from 'uuid';
export default function App() {

  const [enteredTodo, setEnteredTodo] = useState('');
  const [todoItem, setTodoItem] = useState([]);

  const todoInputHandler = (enteredText) => {
    setEnteredTodo(enteredText);
  }

  const addTodoHandler = () => {
    setTodoItem(currentTodos => [...todoItem, enteredTodo])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add Todo" style={styles.input} onChangeText={todoInputHandler}/>
        <Button title="ADD" onPress={addTodoHandler}/>
      </View>
      <View>
        {todoItem.map((todo) => <Text key={uuidv4}>{todoItem}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
});
