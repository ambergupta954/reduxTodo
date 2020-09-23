import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


class EditTodo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Edit Todo</Text>
            </View>
        );
    }

}

export default EditTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: 'orange',
        fontSize: 20
    },
    button: {
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'orange',
        borderWidth: 2,
        width: 200,
        height: 50,
        marginBottom: 20
    },
    input: {
        margin: 10,
        display: 'flex',
        width: '90%',
        height: 50,
        borderBottomColor: 'orange',
        borderBottomWidth: 1
    }
});
EditTodo.options = {
    topBar: {
        title: {
            text: 'Edit todo',
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    }
}