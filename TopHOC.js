import React, { Component } from "react";
import { SafeAreaView, View, Text, Dimensions, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor} from './src/redux/store'

export const WrappedComponent = (Comp)=>{

    return class TopHOC extends Component{
        render(){
            return(
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <Comp {...this.props} globalParent={true}/>
                    </PersistGate>
                </Provider>
            )
        }
    }
}