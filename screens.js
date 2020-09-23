import { Navigation } from 'react-native-navigation';
import Home from './src/screens/Home';
import EditTodo from './src/screens/EditTodo';
import CreateTodo from './src/screens/CreateTodo';
import { WrappedComponent } from './TopHOC';

  
  
export function registeredScreen() {
    Navigation.registerComponent('Home',() => WrappedComponent(Home))
    Navigation.registerComponent('EditTodo',() => WrappedComponent(EditTodo))
    Navigation.registerComponent('CreateTodo',() => WrappedComponent(CreateTodo))
}
