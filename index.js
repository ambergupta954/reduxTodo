
import { Navigation } from "react-native-navigation";
import App from './App';
import CreateTodo from './screens/CreateTodo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'com.myApp.WelcomeScreen'
                        }
                    }
                ]
            }
        }
    });
});
Navigation.registerComponent('CreateTodo',() => CreateTodo);
