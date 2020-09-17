import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Todo from './Todo'
import {connect} from 'react-redux'
import { render } from 'react-dom';

class Home extends Component {
  
   state={
     todos:[]
   }
    
    render(){
      let { goToCreateTodo} = this.props
      let { todos } = this.state
      return (
        <View style={styles.container}>
            <View style={styles.addtodoContainer}>
                <TouchableOpacity style={styles.addTodo} onPress={goToCreateTodo} >
                    <Text style={styles.addTodoText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.todoList}>
                {
                  todos.map((todo)=>{
                    return(
                      <Todo toggleTodo={toggleTodo} text={todo.text} id={todo.id}  />
                    )
                  })
                }
            </View>
        </View>
    );
    }
  
}
const mapStateToProps = state =>({
  todos: state
})
const mapDispatchToProps = dispatch =>({
  togggleTodo: id => dispatch({type:'TOGGLE_TODO',id})
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    todoList: {
        display: 'flex',
        width: '90%'
    },
    addtodoContainer: {
        display: 'flex',
        padding: 20,

    },
    addTodo: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addTodoText: {
        fontSize: 40,
        color: 'orange'
    }
});
