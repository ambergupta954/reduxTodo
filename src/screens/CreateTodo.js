import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Navigation } from "react-native-navigation";
import { connect } from 'redux';
import { addTodo } from '../redux/actions.js'

class CreateTodo extends Component {

    state = {
        todo: ''
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
        let { todo } =this.state
        return (
            <View style={styles.container}>
                <TextInput
                    value={todo}
                    onChangeText={(todo)=>{this.setState({todo})}}
                    style={styles.input}
                    placeholder="create a new todo"
                />
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.props.add(todo)
                    this.setState({todo: ''})
                    this.goToHome
                }}>
                    <Text style={styles.text}>
                        ADD TODO
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}
const mapStateToProps=(state)=>{
 console.log(state);
 return {
     todos: state.todos
 }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        add: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);

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
