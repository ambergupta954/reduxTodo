import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';


export default function Todo(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.toggleTodo(props.id)}>
      <Text style={props.completed? styles.textDone : styles.text }>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'90%',
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    padding:10,
    borderColor:'#4d089a',
    borderWidth:2,
    margin:10
  },
  textDone:{
    color:'#4d089a',
    textDecorationLine:'line-through'
  },
  text:{
      color:'#4d089a'
  }
});
