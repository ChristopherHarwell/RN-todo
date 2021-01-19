import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

const TodoInput = (props) => {

    const [enteredTodo, setEnteredTodo] = useState('');

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText);
    }

    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Todo"
                    style={styles.input}
                    onChangeText={todoInputHandler}
                    value={enteredTodo}
                />
                <Button title="ADD" onPress={() => props.onAddTodo(enteredTodo)} />
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
})

export default TodoInput;