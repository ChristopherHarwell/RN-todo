import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {

  const [todoItems, setTodoItem] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTodoHandler = (todoTitle) => {
    setTodoItem(currentTodos => [
      ...currentTodos,
      { id: uuidv4(), value: todoTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (todoId) => {
    setTodoItem(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new todo" onPress={() => setIsAddMode(true)} />
      <TodoInput visible={isAddMode} onAddTodo={addTodoHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={todoItems}
        renderItem={ itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },



});
