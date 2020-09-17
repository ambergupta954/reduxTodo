import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Navigation } from "react-native-navigation";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Todo from './components/Todo'
import Home from './components/Home'
import store from './src/store'
import CreateTodo from './screens/CreateTodo'
import { Provider } from 'react-redux'
export default function App(props) {

  function goToCreateTodo(){
    Navigation.push(props.componentId, {
        component: {
          name: 'CreateTodo',
          options: {
            topBar: {
              title: {
                text: 'CreateTodo'
              }
            }
          }
        }
      }
    )
}
  return (
    <Provider store={store}>
      <Home goToCreateTodo={goToCreateTodo}/>
      
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  todoList:{
    display:'flex',
    width:'90%'
  },
  addtodoContainer:{
    display:'flex',
    padding:20,

  },
  addTodo:{
      width:50,
      height:50,
      borderWidth:2,
      borderColor:'orange',
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  addTodoText:{
      fontSize:40,
      color:'orange'
  }
});
App.options = {
    topBar: {
      title: {
        text: 'Todo App',
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    }
  }