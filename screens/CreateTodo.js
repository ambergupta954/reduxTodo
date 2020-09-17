import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

class CreateTodo extends Component {

    state = {
        text:''
    }
    addTodo=(text)=>{
        this.props.dispatch({type:'ADD_TODO', text })
        this.setState({text:''})
        console.log('called')
    }

    render() {
        let { text }= this.state
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text)=>{this.setState({text})}}
                    style={styles.input}
                    placeholder="create a new todo"
                />
                <TouchableOpacity style={styles.button} onPress={this.addTodo(text)}>
                    <Text style={styles.text}>
                        ADD TODO
            </Text>
                </TouchableOpacity>
            </View>
        );
    }

}
export default connect()(CreateTodo);

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
CreateTodo.options = {
    topBar: {
        title: {
            text: 'create todo',
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