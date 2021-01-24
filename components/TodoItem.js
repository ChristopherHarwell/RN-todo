import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const TodoItem = (props) => {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity
                style={styles.deleteButton}
                activeOpacity={0.8}
                onPress={props.onDelete.bind(this, props.id)}
            >
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity >
            <View style={styles.textContainer}>
                <Text style={styles.todoText}>{props.title}</Text>
            </View>

        </View>


    )
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    deleteButton: {
        marginTop: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'red',
        marginLeft: '90%'
    },
    deleteButtonText: {
        fontSize: "5%",
        color: 'white'
    },
    todoText: {
        fontSize: 30,
        marginBottom: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textContainer: {
        width: '80%',
        paddingTop: 15,
        marginTop: '-10%'
    }
})

export default TodoItem;