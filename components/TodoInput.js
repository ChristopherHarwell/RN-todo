import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

const TodoInput = (props) => {

    const [enteredTodo, setEnteredTodo] = useState('');

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText);
    }

    const addTodoHandler = () => {
        props.onAddTodo(enteredTodo);
        setEnteredTodo('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Todo"
                    style={styles.input}
                    onChangeText={todoInputHandler}
                    value={enteredTodo}
                />
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={addTodoHandler} />
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                </View>

            </View>
        </Modal>


    )
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%'

    }
})

export default TodoInput;