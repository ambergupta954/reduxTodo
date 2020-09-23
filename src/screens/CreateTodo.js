import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Navigation } from "react-native-navigation";

class CreateTodo extends Component {

    state = {
        text:''
    }
    goToHome=()=>{
        Navigation.push(this.props.componentId, {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  title: {
                    text: 'Home'
                  }
                }
              }
            }
          }
        )
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
                <TouchableOpacity style={styles.button} onPress={this.goToHome}>
                    <Text style={styles.text}>
                        ADD TODO
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default CreateTodo;

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
