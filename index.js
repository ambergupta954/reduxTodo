
import { Navigation } from "react-native-navigation";
import CreateTodo from './src/screens/CreateTodo';
import Home from './src/screens/Home'
import { registeredScreen } from './screens'
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

registeredScreen()

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home'
                        }
                    }
                ]
            }
        }
    });
});

