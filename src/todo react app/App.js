import React, { Component } from 'react'
import App1 from './App1'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { masterReducer } from './reducers/masterReducer'
import { state } from './reducers/state'

export default class App extends Component {
constructor(){
    super()
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1250x620/?mobile')";

}    
    // componentWillMount(){
    //     document.body.style.backgroundImage = "url('https://source.unsplash.com/1250x620/?mobile')";
    //     console.log('unsplash rendered.');
    // }
    render() {
        return (
            <>
            <Provider store = {createStore(masterReducer, state)}>
                <App1/>   
            </Provider>
            </>
        )
    }
}
